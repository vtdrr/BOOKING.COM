# Booking.com Clone - Frontend

Bản clone giao diện trang chủ Booking.com được xây dựng với **React 18**, **Vite** và **react-bootstrap**.

## 🚀 Công nghệ sử dụng

- **React 18** - Thư viện UI
- **Vite** - Build tool nhanh
- **react-bootstrap** + **Bootstrap 5** - Component & Grid system
- **react-icons (Feather)** - Icon set
- **CSS Variables** - Theming (Booking blue #003580)

## 📦 Cài đặt

```bash
# Clone project
cd booking-clone

# Cài đặt dependencies
npm install

# Hoặc sử dụng pnpm/yarn
pnpm install
# yarn install
```

## 🛠 Chạy dự án

### Development Mode
```bash
npm run dev
```
Mở trình duyệt tại: **http://localhost:5173**

### Production Build
```bash
npm run build
```
File output ở thư mục `dist/` (đã minify, optimize).

### Preview Production Build
```bash
npm run preview
```
Mở trình duyệt tại: **http://localhost:4173**

## 📁 Cấu trúc thư mục

```
booking-clone/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Header/         # Header component (nav, dropdowns, auth)
│   │   ├── SearchForm/     # Search form (tabs, inputs, guests)
│   │   └── Footer/         # Footer (links, social, legal)
│   ├── styles/
│   │   └── custom.css      # Global styles, CSS variables
│   ├── App.jsx             # Main app component
│   ├── App.css             # App-specific styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template + SEO meta
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Các thành phần giao diện

| Component | Mô tả |
|-----------|-------|
| **Header** | Top bar (Genius, offers), Navigation (6 tabs), Language/Currency dropdowns, Login/Register buttons |
| **SearchForm** | 6 tabs tìm kiếm, Destination input, Check-in/Check-out display, Guest selector, Search button, Hints |
| **Hero Section** | Gradient background, headline, subtext |
| **Popular Destinations** | 6 destination cards (Hà Nội, HCM, Đà Nẵng, Phú Quốc, Nha Trang, Hội An) |
| **Why Booking** | 6 benefit cards (Secure, No fees, Free cancellation, Best price, 24/7 support, Real reviews) |
| **App Promo** | Gradient CTA card với nút tải app |
| **Footer** | 5 column links, App store badges, Social icons, Language/Currency, Legal links |

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 576px | Stacked layout, hamburger menu, full-width buttons |
| Tablet | 576px - 991px | Collapsed nav, 2-col grid, adjusted padding |
| Desktop | ≥ 992px | Full layout, horizontal nav, 4-6 col grids |
| Large Desktop | ≥ 1200px | Max-width container, optimal spacing |

## 🎨 Customization

### Thay đổi màu thương hiệu
Chỉnh sửa CSS variables trong `src/styles/custom.css`:
```css
:root {
  --booking-blue: #003580;        /* Primary color */
  --booking-blue-hover: #002763;  /* Hover state */
  --booking-blue-light: #e8f0fe;  /* Light variant */
  /* ... */
}
```

### Thêm tab tìm kiếm mới
Trong `src/components/SearchForm/SearchForm.jsx`, thêm object vào array `tabs`:
```javascript
const tabs = [
  { id: 'accommodation', label: 'Chỗ ở', icon: FiMapPin, active: true },
  // Thêm tab mới
  { id: 'new-tab', label: 'Tab mới', icon: FiIcon },
];
```

## 📋 Scripts có sẵn

```json
{
  "dev": "vite",           // Development server
  "build": "vite build",   // Production build
  "preview": "vite preview", // Preview build
  "lint": "eslint ."       // Code linting (nếu cấu hình)
}
```

## 🌐 Triển khai (Deploy)

### Vercel / Netlify / Cloudflare Pages
1. Connect repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy!

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📝 License

MIT License - Dự án học tập/giáo dục.

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/ten-tinh-nang`
3. Commit changes: `git commit -m 'Add: mô tả tính năng'`
4. Push branch: `git push origin feature/ten-tinh-nang`
5. Tạo Pull Request

---

**Lưu ý**: Đây là bản clone giao diện **static UI** cho mục đích học tập. Không có backend, API, hay chức năng đặt phòng thực tế.