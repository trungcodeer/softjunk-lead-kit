# Shareable Order Link Evidence

Local validation:
- Product JSON parse: all `*.json` files under `softjunk-lead-kit-site` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: all `*.json` files under `trungcodeer.github.io` parsed with `ConvertFrom-Json`.
- Root XML parse: `sitemap.xml` parsed as XML.
- Page script parse: `node -e` extracted inline scripts from `shareable-order-link.html` and returned `script ok 1`.

Files added:
- `shareable-order-link.html`
- `shareable-order-link.json`
- `shareable-order-link.txt`

Public distribution:
- Gist: `https://gist.github.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb`
- Raw JSON: `https://gist.githubusercontent.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb/raw/shareable-order-link.json`
- Raw text: `https://gist.githubusercontent.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb/raw/shareable-order-link.txt`

Payment gate:
- This slice did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Funnel Alignment Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.

Public Gist validation:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` was updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` was updated from local distribution sources.
- `gh gist view --raw` confirmed both Gists now expose `shareable-order-link` references.

Payment gate:
- This slice still did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Agent Commerce Capsule Evidence

Local validation:
- Product JSON parse returned `json_ok=19` for product root JSON, `.well-known` JSON, and `distribution/**/*.json`.
- Product XML parse returned `xml_ok=2` for `sitemap.xml` and `feed.xml`.
- Root JSON parse returned `json_ok=6` for root and `.well-known` JSON.
- Root XML parse returned `xml_ok=1` for root `sitemap.xml`.
- Product script parse returned `agent-commerce.html js_scripts=1 ok` and `index.html js_scripts=1 ok`.
- Root script parse returned `index.html js_scripts=0 ok` and `ai/index.html js_scripts=0 ok`.
- Local Chrome headless `--dump-dom` on `agent-commerce.html` emitted `Agent Commerce Capsule`, `agent-commerce.json`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `Lead Recovery Audit`, and `shareable order link`.

Files added:
- `agent-commerce.html`
- `agent-commerce.json`
- `agent-commerce.txt`

Commits and deploy:
- Product commit: `f3f9970 Add agent commerce capsule`.
- Root commit: `eae42ce Link agent commerce capsule from root`.
- Product Pages run `26425540770` completed with `success`.
- Root Pages run `26425540558` completed with `success`.

Live deploy validation:
- Product route checks returned HTTP 200 and expected content for `agent-commerce.html`, `agent-commerce.json`, `agent-commerce.txt`, `buyer-index.json`, `agent-buyer-packet.json`, `agent-offer.json`, `paypal-payment-intent.json`, `offers.json`, `product-feed.json`, `llms.txt`, `sitemap.xml`, and `feed.xml`.
- Root route checks returned `root_live_ok=11` for `/`, `/ai/`, `ai.json`, `ai.txt`, `root-offer.json`, `paypal.json`, `.well-known/paypal-payment.json`, `.well-known/softjunk-root-offer.json`, `.well-known/openapi.yaml`, `llms.txt`, and `sitemap.xml`.
- Live Chrome headless `--dump-dom` on `agent-commerce.html` emitted `Agent Commerce Capsule`, `agent-commerce.json`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `Lead Recovery Audit`, and `shareable order link`.

Public distribution:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.5`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-agent-commerce-v1`.
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.
- `gh gist view --raw` confirmed both Gists expose `agent-commerce`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED`.
- IndexNow returned success for 31 submitted URLs.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538506401`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538507691`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Product Homepage Buyer Shortcut Evidence

Baseline:
- Live root homepage returned HTTP 200 and PayPal was present; screenshot showed AI deal desk as a button but not uppercase text in the content check.
- Live product homepage returned HTTP 200 and PayPal was present; screenshot showed a long hero action list with `Pay $5` below several other tool actions and no first-screen `PAYPAL_PAYMENT_VERIFIED=true` copy.
- Live profile homepage returned HTTP 200 and contained AI Deal Desk, PayPal, and `PAYPAL_PAYMENT_VERIFIED=true`.

Local validation:
- Product `index.html` updated title/meta to `SoftJunk AI Deal Desk - $5 Lead Follow-Up Kit`.
- Hero copy now says to open the AI Deal Desk, generate the PayPal note, then pay exactly $5.
- Hero actions now prioritize `Open AI Deal Desk`, `Pay $5 on PayPal`, `After-payment handoff`, and `GitHub buyer discussion`.
- First-screen note now states digital/custom PayPal note rules and `PAYPAL_PAYMENT_VERIFIED=true`.
- Top navigation was simplified to buyer-critical routes.
- `git diff --check` returned only Windows line-ending warnings and no whitespace errors.
- Inline script parse returned `script_check_ok`.
- Local Chrome DOM emitted SoftJunk AI Deal Desk, Open AI Deal Desk, Pay $5 on PayPal, GitHub buyer discussion, discussion #4, and the verification gate.
- Local desktop/mobile screenshots showed the buyer path in the first screen and no mobile overflow.

Public deploy validation:
- Product commit: `ca09fbb` in `https://github.com/trungcodeer/softjunk-lead-kit`.
- GitHub Pages deployment completed successfully.
- Live product homepage returned HTTP 200 and contained `SoftJunk AI Deal Desk - $5 Lead Follow-Up Kit`, `Open AI Deal Desk`, `Pay $5 on PayPal`, `GitHub buyer discussion`, and `PAYPAL_PAYMENT_VERIFIED=true`.
- Live Chrome DOM confirmed the same buyer actions and discussion #4 URL.
- Live mobile screenshot showed `Open AI Deal Desk` and `Pay $5 on PayPal` in the first viewport.
- Live desktop screenshot showed the focused buyer actions and shorter nav.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.10`.
- Initial IndexNow payload with GitHub URLs under `trungcodeer.github.io` was rejected with HTTP 422.
- Host-correct IndexNow retry returned `status=200 urls=3`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4539222817`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4539222844`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 GitHub Discussion Buyer Path Evidence

Pre-check:
- GitHub viewer `trungcodeer` had `pinnedItems.totalCount=0`.
- GraphQL mutation schema exposed `pinEnvironment`, `pinIssue`, `pinIssueComment`, `unpinIssue`, and `unpinIssueComment`, but no repository pin mutation.
- GitHub user profile `bio` was `null` and `blog` was empty, but `gh api user -X PATCH` returned `404` with required action `gh auth refresh -h github.com -s user`, so user profile metadata could not be updated with the current token.

Discussion creation:
- `gh repo edit trungcodeer/softjunk-lead-kit --enable-discussions` succeeded.
- GraphQL category query returned Discussions enabled and categories including `Announcements`.
- `createDiscussion` created discussion #4 with title `SoftJunk $5 AI Deal Desk buyer path`.
- Discussion URL: `https://github.com/trungcodeer/softjunk-lead-kit/discussions/4`.
- Discussion category: `Announcements`.
- Discussion body includes AI Deal Desk, exact PayPal route `https://paypal.me/softjunk/5USD`, after-payment handoff, digital/custom PayPal note rules, privacy warning, and `PAYPAL_PAYMENT_VERIFIED=true` gate.

Local validation:
- Product README contains discussion #4, AI Deal Desk, PayPal URL, and verification gate.
- `.github/SUPPORT.md` contains discussion #4, AI Deal Desk, PayPal URL, and verification gate.
- `.github/ISSUE_TEMPLATE/config.yml` contains `Public buyer discussion`, discussion #4, and PayPal URL.
- `git diff --check` returned only Windows line-ending warnings and no whitespace errors before commit.

Public deploy validation:
- Product commit: `723e458` in `https://github.com/trungcodeer/softjunk-lead-kit`.
- GitHub Pages deployment completed successfully.
- Raw product README from default branch contains discussion #4, AI Deal Desk, PayPal URL, and verification gate.
- Raw product issue config from default branch contains `Public buyer discussion`, discussion #4 URL, and PayPal URL.
- GraphQL discussion query confirmed Discussions enabled, title, URL, category, AI Deal Desk, PayPal URL, and verification gate.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.9`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4539132567`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4539132508`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 README Buyer Shortcut Evidence

Local validation:
- Product README contains `## Buyer Shortcut`, `Open the AI Deal Desk`, `https://paypal.me/softjunk/5USD`, `after-pay.html`, and `PAYPAL_PAYMENT_VERIFIED=true`.
- Root README contains `Buyer shortcut:`, `Open the AI Deal Desk`, `https://paypal.me/softjunk/5USD`, after-payment handoff, and `PAYPAL_PAYMENT_VERIFIED=true`.
- Profile README contains `Buyer shortcut:`, `Open the profile handoff`, `Open the AI Deal Desk`, `https://paypal.me/softjunk/5USD`, after-payment handoff, and `PAYPAL_PAYMENT_VERIFIED=true`.
- `git diff --check` returned only Windows line-ending warnings and no whitespace errors before commit.

Public deploy validation:
- Product commit: `dbb6b2d` in `https://github.com/trungcodeer/softjunk-lead-kit`.
- Root commit: `b816f18` in `https://github.com/trungcodeer/trungcodeer.github.io`.
- Profile commit: `e02566d` in `https://github.com/trungcodeer/trungcodeer`.
- GitHub Pages deployments completed successfully for all three repos.
- Raw product README from default branch contains the shortcut, AI Deal Desk, PayPal URL, and verification gate.
- Raw root README from default branch contains the shortcut, AI Deal Desk, PayPal URL, and verification gate.
- Raw profile README from default branch contains the shortcut, profile handoff, AI Deal Desk, PayPal URL, and verification gate.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.8`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-readme-buyer-shortcut-v1`.
- Profile release: `https://github.com/trungcodeer/trungcodeer/releases/tag/profile-readme-buyer-shortcut-v1`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4539092729`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4539092701`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 GitHub Funding And Metadata Route Evidence

Local validation:
- Product `.github/FUNDING.yml` contains AI Deal Desk, `paypal.me/softjunk/5USD`, and exactly 4 custom links.
- Root `.github/FUNDING.yml` contains AI Deal Desk, `paypal.me/softjunk/5USD`, and exactly 4 custom links.
- Profile `.github/FUNDING.yml` contains profile microsite, AI Deal Desk, `paypal.me/softjunk/5USD`, and exactly 4 custom links.
- Product `.github/ISSUE_TEMPLATE/config.yml` contains the AI Deal Desk contact link before the PayPal links.
- Product `.github/SUPPORT.md` contains AI Deal Desk, PayPal.Me, and the `PAYPAL_PAYMENT_VERIFIED=true` fulfillment gate.
- `git diff --check` found only Windows line-ending warnings and no whitespace errors.

Public deploy and metadata validation:
- Product commit: `6f8e10d` in `https://github.com/trungcodeer/softjunk-lead-kit`.
- Root commit: `82511a7` in `https://github.com/trungcodeer/trungcodeer.github.io`.
- Profile commit: `bf84189` in `https://github.com/trungcodeer/trungcodeer`.
- GitHub Pages deployments completed successfully for all three repos.
- GitHub API product metadata: homepage `https://trungcodeer.github.io/softjunk-lead-kit/ai-deal-desk.html`, topic `ai-deal-desk`, topic `agent-commerce`.
- GitHub API root metadata: homepage `https://trungcodeer.github.io/softjunk-lead-kit/ai-deal-desk.html`, topics `ai-deal-desk`, `agent-commerce`, and `lead-recovery`.
- GitHub API profile metadata: homepage `https://trungcodeer.github.io/trungcodeer/`, topics `ai-deal-desk`, `lead-recovery`, and `llms-txt`.
- Raw product funding file exposed AI Deal Desk, PayPal.Me, and 4 custom links from default branch.
- Raw root funding file exposed AI Deal Desk, PayPal.Me, and 4 custom links from default branch.
- Raw profile funding file exposed profile microsite, AI Deal Desk, PayPal.Me, and 4 custom links from default branch.
- Raw product issue config exposed AI Deal Desk, PayPal.Me, and Agent Commerce Capsule contact links.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.7`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-github-funding-v1`.
- Profile release: `https://github.com/trungcodeer/trungcodeer/releases/tag/profile-github-funding-v1`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4539046137`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4539046101`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Profile AI Deal Desk Route Evidence

Local validation:
- Profile JSON parse: `softjunk-profile-offer.json` parsed with `ConvertFrom-Json` and exposed `primary_buyer_route`, `ai_deal_desk_url`, and `payment_url`.
- Profile XML parse: `sitemap.xml` parsed as XML.
- Profile JSON-LD parse: `index.html` offer JSON-LD parsed and returned `SoftJunk AI Deal Desk and Lead Follow-Up Kit`.
- Profile inline script parse: the non-JSON-LD inline script parsed with Node `--check`.
- Local Chrome headless DOM emitted `profile-handoff-form`, a generated AI Deal Desk URL with query parameters, `Custom Sequence`, and `PAYPAL_PAYMENT_VERIFIED=true`.
- Desktop and mobile Chrome headless screenshots were captured; mobile overflow was fixed before deploy.

Public deploy validation:
- Profile commit: `ac8b344` in `https://github.com/trungcodeer/trungcodeer`.
- GitHub Pages run `26427652157` completed successfully.
- Live profile HTML returned HTTP 200 and contained `SoftJunk AI Deal Desk`, `profile-handoff-form`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED=true`.
- Live profile JSON returned primary buyer route `https://trungcodeer.github.io/softjunk-lead-kit/ai-deal-desk.html`, payment URL `https://paypal.me/softjunk/5USD`, and gate `PAYPAL_PAYMENT_VERIFIED=true`.
- Live profile `llms.txt` returned Primary AI Deal Desk, Agent Commerce JSON, the PayPal URL, and the verification gate.
- Live profile sitemap returned AI Deal Desk and Agent Commerce route entries.
- Live Chrome headless DOM confirmed the generated default route `ai-deal-desk.html?business=small+business&service=lead+follow-up&source=quiet+lead&tone=plain&need=stalled+reply&next=reply+today&value=unknown`.

Release and discovery:
- Profile release: `https://github.com/trungcodeer/trungcodeer/releases/tag/profile-ai-deal-desk-v1`.
- IndexNow returned `status=200 urls=12`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538985670`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538985671`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 AI Deal Desk Evidence

Local validation:
- Product JSON parse returned `product_json_ok=20` for product root JSON, `.well-known` JSON, and `distribution/**/*.json`.
- Product XML parse returned `product_xml_ok=2` for `sitemap.xml` and `feed.xml`.
- Root JSON parse returned `root_json_ok=6` for root and `.well-known` JSON.
- Root XML parse returned `root_xml_ok=1` for root `sitemap.xml`.
- Product script parse returned `ai-deal-desk.html js_scripts=1 ok`, `agent-commerce.html js_scripts=1 ok`, `index.html js_scripts=1 ok`, `pay.html js_scripts=1 ok`, and `checkout.html js_scripts=1 ok`.
- Root script parse returned `index.html js_scripts=0 ok`, `ai/index.html js_scripts=0 ok`, `pay/index.html js_scripts=1 ok`, `paypal/index.html js_scripts=1 ok`, and `buy/index.html js_scripts=0 ok`.
- Local Chrome headless `--dump-dom` on `ai-deal-desk.html` with sample query params emitted `AI Deal Desk`, `Buyer handoff generated`, `Custom Sequence`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `shareable-order-link`, `custom-sequence-preview`, and `Lead Recovery Audit`.

Files added:
- `ai-deal-desk.html`
- `ai-deal-desk.json`
- `ai-deal-desk.txt`

Commits and deploy:
- Product commit: `4e020df Add AI deal desk buyer handoff`.
- Root commit: `e172f9f Route root buyers to AI deal desk`.
- Product Pages run `26426888734` completed with `success`.
- Root Pages run `26426888525` completed with `success`.

Live deploy validation:
- Product route checks returned `product_live_ok=11` for AI Deal Desk HTML/JSON/TXT, buyer index, agent packet, payment intent, offers/product feed, `llms.txt`, sitemap, and RSS.
- Root route checks returned `root_live_ok=13` for root, `/ai/`, `/pay/`, `/paypal/`, `/buy/`, root JSON/text/payment manifests, OpenAPI, `llms.txt`, and sitemap.
- Live Chrome headless `--dump-dom` on `ai-deal-desk.html` with sample query params emitted `AI Deal Desk`, `Buyer handoff generated`, `Custom Sequence`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `shareable-order-link`, `custom-sequence-preview`, and `Lead Recovery Audit`.

Public distribution:
- AI Deal Desk Gist: `https://gist.github.com/trungcodeer/16d6861c14de82187946861e4c448844`.
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.6`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-ai-deal-desk-v1`.
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.
- `gh gist view --raw` confirmed the AI Deal Desk, payment-intent, and agent-buyer-packet Gists expose `ai-deal-desk`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED`.
- IndexNow returned success for 39 submitted URLs.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538806320`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538807844`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Gallery Deploy Evidence

Live deploy validation:
- Product route checks returned HTTP 200 for `custom-sequence-gallery.html`, `custom-sequence-gallery.json`, `custom-sequence-gallery.txt`, `custom-sequence-preview.html`, `buyer-index.json`, `agent-buyer-packet.json`, `agent-offer.json`, `paypal-payment-intent.json`, `offers.json`, `product-feed.json`, `share-kit.html`, `llms.txt`, `sitemap.xml`, and `feed.xml`.
- Root route checks returned HTTP 200 for `/`, `/ai/`, `/pay/`, `/paypal/`, `/buy/`, `ai.json`, `ai.txt`, `root-offer.json`, `paypal.json`, `.well-known/paypal-payment.json`, `.well-known/softjunk-root-offer.json`, `.well-known/openapi.yaml`, `llms.txt`, and `sitemap.xml`.
- Chrome headless `--dump-dom` on the live gallery emitted `Custom Sequence Gallery`, `HVAC repair form lead`, `custom-sequence-preview.html`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED`.
- Chrome headless `--dump-dom` on the live HVAC prefilled preview emitted `Preview generated`, `Custom Sequence Preview`, `HVAC company`, `shareable-order-link.html`, and `paypal.me/softjunk/5USD`.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.4`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-custom-sequence-gallery-v1`.
- IndexNow returned `status=200 urls=39`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538232839`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538232732`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Gallery Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.
- Product script parse: `custom-sequence-gallery.html`, `custom-sequence-preview.html`, `index.html`, `share-kit.html`, and `follow-up-examples.html` inline scripts parsed with Node.
- Root script parse: `index.html`, `ai/index.html`, `pay/index.html`, `paypal/index.html`, and `buy/index.html` inline scripts parsed with Node.
- Browser smoke test: Chrome headless `--dump-dom` loaded `custom-sequence-gallery.html` and emitted gallery title, HVAC scenario, preview links, PayPal URL, and verification gate text.
- Browser smoke test: Chrome headless `--dump-dom` loaded the HVAC prefilled custom preview URL and emitted generated preview, PayPal note, shareable order link, PayPal URL, and `Preview generated` status text.

Files added:
- `custom-sequence-gallery.html`
- `custom-sequence-gallery.json`
- `custom-sequence-gallery.txt`

Public Gist updates:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Preview Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.
- Product script parse: `custom-sequence-preview.html`, `index.html`, and `share-kit.html` inline scripts parsed with Node.
- Root script parse: `index.html`, `ai/index.html`, `pay/index.html`, `paypal/index.html`, and `buy/index.html` inline scripts parsed with Node.
- Browser smoke test: Chrome headless `--dump-dom` loaded `custom-sequence-preview.html` with query params and emitted generated preview, PayPal note, shareable order link, and `Preview generated` status text.

Files added:
- `custom-sequence-preview.html`
- `custom-sequence-preview.json`
- `custom-sequence-preview.txt`

Public Gist updates:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.

Payment gate:
- This slice still did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.
