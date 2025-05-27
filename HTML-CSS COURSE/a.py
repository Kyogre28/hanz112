from PIL import Image, ImageDraw

# Ukuran gambar
width, height = 1080, 1920
background_color = "#ffffff"
title_color = "#222831"
text_color = "#393E46"
highlight_color = "#00ADB5"

# Membuat canvas
image = Image.new("RGB", (width, height), color=background_color)
draw = ImageDraw.Draw(image)

# Ukuran teks
title_font_size = 64
subtitle_font_size = 40
text_font_size = 32

y = 50
padding = 40

# Judul
title = "5 Life Skills Penting yang Tidak Diajarkan di Sekolah"
draw.text((padding, y), title, fill=title_color)
y += 100

# Konten infografis
points = [
    ("1. Mengelola Kesalahan", [
        "• Akui & analisa kesalahan",
        "• Tanya diri sendiri secara jujur",
        "• Jangan ulangi, evaluasi & perbaiki"
    ]),
    ("2. Mencari Kesempatan", [
        "• Skill cari kerja ≠ skill kerja",
        "• Networking, CV, interview penting",
        "• Gunakan platform digital & relasi"
    ]),
    ("3. Literasi Keuangan", [
        "• Budgeting: arus masuk & keluar",
        "• Save & Invest: kelola uang cerdas",
        "• Atur utang, lindungi aset"
    ]),
    ("4. Interaksi Sosial", [
        "• Komunikasi & empati penting",
        "• Konflik, listening & hubungan sehat",
        "• IQ penting, tapi EQ lebih penting"
    ]),
    ("5. Kecerdasan Emosional", [
        "• Self-awareness & self-management",
        "• Peka pada emosi orang lain",
        "• Bangun & rawat relasi"
    ])
]

for title, bullets in points:
    draw.text((padding, y), title, fill=highlight_color)
    y += subtitle_font_size + 10
    for line in bullets:
        draw.text((padding + 20, y), line, fill=text_color)
        y += text_font_size + 5
    y += 20

# Simpan
image.save("life_skills_infografis.png")
