# Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure
```
legal-platform-hero/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage using FloatingHeroSection
│   └── globals.css         # Global styles + Tailwind
├── components/
│   └── floating-hero.tsx   # Main hero component
├── package.json            # Dependencies
├── tailwind.config.js      # Custom animations
├── tsconfig.json           # TypeScript config
└── README.md               # Full documentation
```

---

## ✨ Key Features

### Reusable FloatingCard Component
```tsx
<FloatingCard
  color="blue"
  rotation={-8}
  icon={<Gavel className="w-6 h-6" />}
  label="Matters"
  className="top-12 left-8"
/>
```

### Two Variants
- **default**: Feature cards with icon + label
- **portal**: User card with avatar + name

### Fully Responsive
- **Desktop**: Floating, rotated cards
- **Mobile**: Clean 2x2 grid

---

## 🎨 Customization

### Add a New Card
```tsx
<FloatingCard
  color="purple"
  rotation={5}
  icon={<YourIcon />}
  label="New Feature"
  className="top-60 right-12"
/>
```

### Change Colors
Edit `colorClasses` in `components/floating-hero.tsx`:
```tsx
const colorClasses = {
  blue: 'bg-blue-500 text-white',
  // Add your color
  custom: 'bg-pink-500 text-white',
};
```

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| < 1024px (Mobile/Tablet) | Grid layout, no rotations |
| ≥ 1024px (Desktop) | Floating cards with rotations |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

---

## 📖 Documentation

- **README.md**: Complete documentation
- **IMPLEMENTATION.md**: Technical deep-dive

---

## 🎯 Requirements Met

✅ Split layout (content left, floating cards right)  
✅ Reusable FloatingCard component with props  
✅ Portal variant for "John Doe" card  
✅ Blurred background shapes  
✅ Typography hierarchy  
✅ Responsive design  
✅ Next.js 14+ App Router  
✅ Tailwind CSS with arbitrary values  

---

## 💡 Need Help?

Check the full README.md for:
- Detailed component documentation
- Animation customization
- Browser support
- Troubleshooting

---

**Ready to build?** Run `npm install && npm run dev` 🚀
