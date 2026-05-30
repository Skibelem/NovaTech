# NovaTech Agency — Production Deployment & Domain Launch Blueprint

This guide details the step-by-step instructions to deploy your compiled NovaTech React-Vite landing page to production hosting and configure a custom domain (e.g., `novatech.agency`).

---

## 1. Fast-Track Hosting Deployments
Because your landing page builds into a pure, optimized static bundle in `/dist`, you can deploy it instantly on the top three developer-focused static web hosting platforms for free.

### Option A: Vercel (Recommended)
Vercel is the creator of Next.js and provides instant global edge delivery and automated SSL setup.

1. **Prerequisite**: Push your local repository to a private or public GitHub repository.
2. Sign in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New"** ➔ **"Project"**.
4. Import your `NovaTech` repository.
5. In the **Configure Project** window:
   - **Framework Preset**: Select **"Vite"** (Vercel auto-detects this).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `dist` (default).
6. Click **"Deploy"**. Your site will build and launch in under 45 seconds under a secure `*.vercel.app` subdomain!

---

### Option B: Netlify
Netlify offers automated global CDN routing and instant rollback states.

1. Sign in to [Netlify](https://netlify.com) using your GitHub account.
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Choose **GitHub** and authorize your repository.
4. Select the `NovaTech` repository.
5. Confirm settings:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy Site"**. Your agency site will launch with a secure `*.netlify.app` subdomain!

---

### Option C: Cloudflare Pages
Cloudflare Pages delivers the fastest initial connection times because your site is distributed directly on Cloudflare's massive edge network.

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **"Workers & Pages"** ➔ **"Create application"** ➔ **"Pages"** ➔ **"Connect to Git"**.
3. Connect your GitHub account and select your `NovaTech` repository.
4. Set build settings:
   - **Framework preset**: **"Vite"**.
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **"Save and Deploy"**.

---

## 2. Custom Domain Configuration (e.g., `novatech.agency`)
Once your site is deployed to Vercel, Netlify, or Cloudflare, you can bind it to a custom domain.

### Step 1: Add Custom Domain in Hosting Dashboard
- **Vercel**: Go to **Project Settings** ➔ **Domains** ➔ Enter `novatech.agency` (and `www.novatech.agency`) ➔ Click **Add**.
- **Netlify**: Go to **Site Settings** ➔ **Domain management** ➔ Click **Add domain alias** ➔ Enter `novatech.agency` ➔ Click **Save**.
- **Cloudflare Pages**: Go to **Pages Project** ➔ **Custom domains** ➔ Click **Set up a custom domain** ➔ Enter `novatech.agency`.

---

### Step 2: Configure DNS Records at Domain Registrar
Log in to your domain provider (e.g., Namecheap, GoDaddy, Hover, Google Domains) where you bought `novatech.agency`, navigate to **DNS Management / Advanced DNS**, and add the appropriate records depending on your chosen hosting platform:

#### If using Vercel:
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (Root) | `76.76.21.21` | Automatic / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 3600 |

#### If using Netlify:
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (Root) | `75.2.60.5` | Automatic / 3600 |
| **CNAME** | `www` | `your-site-name.netlify.app.` | Automatic / 3600 |

#### If using Cloudflare Pages:
*(If your domain is already on Cloudflare, DNS is configured automatically! If hosted elsewhere, use CNAME targets provided in the Pages dashboard):*
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `@` (Root) | `your-pages-project.pages.dev.` | Automatic / 3600 |
| **CNAME** | `www` | `your-pages-project.pages.dev.` | Automatic / 3600 |

*Note: Allow up to 1–15 minutes for global DNS propagation to complete. Once complete, your hosting platform will automatically generate a free, renewing SSL Certificate (HTTPS) to guarantee a secure connection for your clients!*
