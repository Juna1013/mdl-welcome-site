#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized');

// Image optimization settings
const SETTINGS = {
    webp: {
        quality: 85,
        effort: 6,
    },
    png: {
        compressionLevel: 9,
        quality: 90,
    },
    jpeg: {
        quality: 85,
        progressive: true,
    },
    // Max dimensions (maintaining aspect ratio)
    maxWidth: 2000,
    maxHeight: 2000,
};

async function ensureDir(dir) {
    try {
        await mkdir(dir, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

async function getImageFiles(dir) {
    const files = await readdir(dir);
    const imageExtensions = ['.jpg', '.jpeg', '.png'];

    const imageFiles = [];
    for (const file of files) {
        const filePath = join(dir, file);
        const stats = await stat(filePath);

        if (stats.isFile() && imageExtensions.includes(extname(file).toLowerCase())) {
            imageFiles.push(filePath);
        }
    }

    return imageFiles;
}

async function optimizeImage(inputPath) {
    const filename = basename(inputPath, extname(inputPath));
    const outputPathWebP = join(OPTIMIZED_DIR, `${filename}.webp`);

    console.log(`Processing: ${basename(inputPath)}`);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`  Original: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(2)} KB`);

    // Resize if too large
    let resizeOptions = {};
    if (metadata.width > SETTINGS.maxWidth || metadata.height > SETTINGS.maxHeight) {
        resizeOptions = {
            width: SETTINGS.maxWidth,
            height: SETTINGS.maxHeight,
            fit: 'inside',
            withoutEnlargement: true,
        };
    }

    // Convert to WebP
    const webpBuffer = await image
        .resize(resizeOptions)
        .webp(SETTINGS.webp)
        .toFile(outputPathWebP);

    console.log(`  WebP: ${webpBuffer.width}x${webpBuffer.height}, ${(webpBuffer.size / 1024).toFixed(2)} KB`);
    console.log(`  Saved: ${outputPathWebP}`);
    console.log(`  Reduction: ${(((metadata.size - webpBuffer.size) / metadata.size) * 100).toFixed(1)}%\n`);

    return {
        original: basename(inputPath),
        webp: basename(outputPathWebP),
        originalSize: metadata.size,
        webpSize: webpBuffer.size,
        reduction: ((metadata.size - webpBuffer.size) / metadata.size) * 100,
    };
}

async function main() {
    console.log('🖼️  Image Optimization Script\n');
    console.log(`Source directory: ${PUBLIC_DIR}`);
    console.log(`Output directory: ${OPTIMIZED_DIR}\n`);

    await ensureDir(OPTIMIZED_DIR);

    const imageFiles = await getImageFiles(PUBLIC_DIR);

    if (imageFiles.length === 0) {
        console.log('No images found to optimize.');
        return;
    }

    console.log(`Found ${imageFiles.length} images to optimize\n`);

    const results = [];
    for (const file of imageFiles) {
        try {
            const result = await optimizeImage(file);
            results.push(result);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }

    // Summary
    console.log('═'.repeat(60));
    console.log('Summary:');
    console.log('═'.repeat(60));

    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalWebP = results.reduce((sum, r) => sum + r.webpSize, 0);
    const totalReduction = ((totalOriginal - totalWebP) / totalOriginal) * 100;

    console.log(`Total images processed: ${results.length}`);
    console.log(`Total original size: ${(totalOriginal / 1024).toFixed(2)} KB`);
    console.log(`Total WebP size: ${(totalWebP / 1024).toFixed(2)} KB`);
    console.log(`Total reduction: ${totalReduction.toFixed(1)}%`);
    console.log(`Space saved: ${((totalOriginal - totalWebP) / 1024).toFixed(2)} KB`);
}

main().catch(console.error);
