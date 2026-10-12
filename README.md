# ShopWave service template

The golden path for a new ShopWave service. Click **Use this template**, name your service, and you get everything below, already wired up:

| What you get | Where |
| --- | --- |
| A small Node.js service with a health check | `src/` |
| Tests | `test/` |
| A CI pipeline: test, security scan, container build | `.github/workflows/ci.yml` |
| A container setup | `Dockerfile` |
| Kubernetes deployment files | `k8s/` |
| A monitoring dashboard | `monitoring/dashboard.json` |
| A developer-portal entry (Backstage) | `catalog-info.yaml` |

## Run it locally

```bash
npm install
npm test
npm start   # then open http://localhost:8080
```

Maintained by the ShopWave platform team. Questions? Ask in #platform-help.
