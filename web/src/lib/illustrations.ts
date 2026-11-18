// Illustrations des fiches (illustrations/<region>/<id>.png à la racine du dépôt),
// optimisées par Astro. Une fiche sans fichier correspondant s'affiche sans image.
const ILLUSTRATIONS = import.meta.glob<ImageMetadata>("../../../illustrations/*/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export function getIllustration(region: string, id: string): ImageMetadata | undefined {
  for (const ext of ["png", "jpg", "jpeg", "webp", "avif"]) {
    const image = ILLUSTRATIONS[`../../../illustrations/${region}/${id}.${ext}`];
    if (image) return image;
  }
  return undefined;
}
