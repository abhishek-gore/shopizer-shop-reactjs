# CI/CD Pipeline Documentation

## Overview
Enterprise-grade CI/CD pipeline for Shopizer React application using GitHub Actions.

## Pipeline Stages

1. **Install** - Dependency installation with caching
2. **Lint** - ESLint code quality checks
3. **Test** - Unit tests with Jest
4. **Security Scan** - npm audit for vulnerabilities
5. **Build** - Production build with versioning
6. **Deploy** - S3 + CloudFront deployment (main branch only)
7. **Smoke Tests** - Post-deployment health checks

## Required GitHub Secrets

### AWS Configuration
- `AWS_DEPLOY_ROLE_ARN` - IAM role ARN for OIDC authentication
- `PROD_S3_BUCKET` - Production S3 bucket name
- `BACKUP_S3_BUCKET` - Backup S3 bucket name
- `PROD_CLOUDFRONT_ID` - CloudFront distribution ID
- `PROD_DOMAIN` - Production domain (e.g., app.example.com)

## Running Smoke Tests Locally

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run smoke tests against local server
npm run test:smoke

# Run against production
TEST_URL=https://your-domain.com npm run test:smoke
```

## Deployment Strategy

- **Main branch** → Automatic deployment to production
- **Pull requests** → Build only (no deployment)
- **Versioning** → `YYYY.MM.DD-{git-sha}`

## Rollback Process

1. Go to Actions tab
2. Select "Rollback Deployment" workflow
3. Click "Run workflow"
4. Optionally specify backup version or leave empty for latest

## Performance

- Cached builds: ~2-3 minutes
- Full builds: ~5-7 minutes
- Smoke tests: ~30 seconds
