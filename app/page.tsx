import fs from "fs";
import path from "path";
import MainView from "../components/MainView";

const VALID_IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

/**
 * Server-side helper function to dynamically scan local image folders
 * and construct properly URL-encoded paths for Next.js App Router.
 */
function getImagesFromFolder(
  folderRelativePath: string,
  urlPrefix: string
): string[] {
  try {
    // Resolve public directory dynamically (handles running from repo root or app root)
    let publicBase = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicBase)) {
      publicBase = path.join(process.cwd(), "belihuloyavillageinn", "public");
    }

    const dirPath = path.join(publicBase, folderRelativePath);
    if (!fs.existsSync(dirPath)) {
      console.warn(`[Image Scanner] Folder not found: ${dirPath}`);
      return [];
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    return entries
      .filter((entry) => {
        if (!entry.isFile()) return false;
        const ext = path.extname(entry.name).toLowerCase();
        return VALID_IMAGE_EXTENSIONS.has(ext);
      })
      .map((entry) => `${urlPrefix}/${encodeURIComponent(entry.name)}`);
  } catch (error) {
    console.error(`[Image Scanner] Failed reading folder "${folderRelativePath}":`, error);
    return [];
  }
}

export default function HomePage() {
  // 1. Read logo from public/image/logo
  const logoImages = getImagesFromFolder("image/logo", "/image/logo");
  const logoUrl = logoImages[0] || "/image/logo/logo.jpg";

  // 2. Read hero images from public/image/hero images slideshow
  const heroImages = getImagesFromFolder(
    "image/hero images slideshow",
    "/image/hero%20images%20slideshow"
  );

  // 3. Read gallery images from public/image/other images
  const otherImages = getImagesFromFolder(
    "image/other images",
    "/image/other%20images"
  );

  return (
    <MainView
      logoUrl={logoUrl}
      heroImages={heroImages}
      otherImages={otherImages}
    />
  );
}
