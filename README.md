# Said Muradkhan — Portfolio

Vite + React ilə qurulmuş şəxsi portfolio saytı. AZ/EN dil dəstəyi, qaranlıq və işıqlı rejim, interaktiv terminal, oturacaq xəritəsi və marşrut kalkulyatoru var.

## Lokal işə salmaq

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Məzmunu dəyişmək

Bütün mətnlər, linklər və bacarıqlar bir faylda saxlanılır: `src/data.js`.
CV faylı: `public/Said_Muradkhan_CV.pdf` (yenisi ilə əvəz et, adını saxla).

## Deploy (Vercel, pulsuz)

1. GitHub-da yeni repo aç və kodu push et:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/saidmuradkhan/portfolio.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) → GitHub ilə daxil ol → **Add New → Project** → repo-nu seç.
   Framework: **Vite** (özü tapır). Build: `npm run build`, Output: `dist`. **Deploy**.
3. Hər `git push`-dan sonra sayt avtomatik yenilənir.

(Alternativ: Netlify və ya Cloudflare Pages — eyni ayarlar.)

## Domen qoşmaq

1. Domen al (məsələn `saidmuradkhan.az` — .az domenləri yerli qeydiyyatçılarda satılır; `.dev` / `.me` isə Namecheap, Cloudflare kimi yerlərdə).
2. Vercel → Project → **Settings → Domains** → domeni əlavə et.
3. Qeydiyyatçının DNS panelində Vercel-in göstərdiyi qeydləri yaz:
   - `A` qeydi: `@` → `76.76.21.21`
   - `CNAME` qeydi: `www` → `cname.vercel-dns.com`
4. DNS yayılması bir neçə dəqiqədən 24 saatadək çəkə bilər. HTTPS avtomatik qoşulur.
