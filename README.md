# Lớp 11A10 - Kỷ Niệm Thanh Xuân

Website kỷ niệm thanh xuân của lớp 11A10.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes · Vercel Analytics

## Tính năng hiện có

- Trang chủ đẹp (hero + thống kê + preview kỷ niệm)
- Trang Thành viên (card + search realtime + filter tổ/giới tính)
- Trang Kỷ niệm (timeline)
- Trang Ảnh & Video (placeholder gallery)
- Sổ lưu bút (Guestbook)
- Thống kê truy cập (placeholder map)
- Dark / Light mode mượt
- Responsive mobile-first
- Vercel Analytics + Speed Insights

## Chạy local

```bash
# 1. Clone repo
git clone <your-repo-url>
cd lop-11a10

# 2. Cài dependency
npm install

# 3. Chạy dev
npm run dev
```

Mở http://localhost:3000

## Deploy lên Vercel (khuyến nghị)

### Cách nhanh nhất

1. Push code lên GitHub
2. Vào [vercel.com/new](https://vercel.com/new)
3. Import repository
4. Framework Preset: **Next.js** (tự detect)
5. Bấm **Deploy**

Không cần thêm env nào để chạy bản demo hiện tại (dùng mock data).

### Sau khi deploy

1. Vào project trên Vercel → tab **Analytics** → **Enable**
2. Redeploy 1 lần để Analytics hoạt động

## Cấu trúc thư mục

```
src/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── thanh-vien/           # Thành viên
│   ├── ky-niem/              # Timeline kỷ niệm
│   ├── anh-video/            # Gallery
│   ├── guestbook/            # Sổ lưu bút
│   ├── thong-ke/             # Thống kê + map
│   ├── layout.tsx
│   ├── providers.tsx
│   └── globals.css
├── components/
│   └── layout/               # Navbar, Footer, ThemeToggle
├── lib/
│   ├── constants.ts          # Mock data + config
│   └── utils.ts              # cn() helper
└── types/
    └── index.ts
```

## Mở rộng tiếp theo (Supabase)

Khi sẵn sàng kết nối database thật:

1. Tạo project trên [supabase.com](https://supabase.com)
2. Copy URL + anon key vào `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

3. Tạo bảng `members`, `memories`, `guestbook`, `visits` theo schema trong `src/types/index.ts`

## Theme màu

- Primary: xanh dương (#2563eb)
- Accent: vàng nhẹ
- Font: Be Vietnam Pro

## License

MIT — Lớp 11A10
