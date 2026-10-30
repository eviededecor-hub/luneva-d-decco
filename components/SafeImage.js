"use client";
import { useState } from "react";
import Image from "next/image";

// Gambar yang otomatis disembunyikan jika gagal dimuat,
// sehingga yang terlihat hanya panel warna lembut di belakangnya.
export default function SafeImage(props) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <Image {...props} alt={props.alt} onError={() => setOk(false)} />;
}
