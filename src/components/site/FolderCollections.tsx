"use client";

import GlassFolder, { type ArtPreset, type FolderFile } from "@/components/ui/glass-folder-cards";

export type FolderCollection = {
  label: string;
  meta?: string;
  art?: ArtPreset;
  files: readonly FolderFile[];
};

export function FolderCollections({
  collections,
  className = "",
}: {
  collections: readonly FolderCollection[];
  className?: string;
}) {
  return (
    <div className={`grid justify-items-center gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3 ${className}`}>
      {collections.map((collection, index) => (
        <GlassFolder
          key={collection.label}
          label={collection.label}
          meta={collection.meta}
          art={collection.art ?? (["aurora", "dusk", "glacier", "verdant", "ember"][index % 5] as ArtPreset)}
          seed={17 + index * 23}
          files={[...collection.files]}
          action="none"
          width={280}
          appearDelay={index * 90}
        />
      ))}
    </div>
  );
}
