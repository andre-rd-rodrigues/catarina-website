# Branch Protection Setup

To ensure tests run before merging, configure the following branch protection rules in your GitHub repository:

## Required Status Checks

1. Go to your repository settings
2. Navigate to "Branches" → "Branch protection rules"
3. Add a rule for `main` and `develop` branches
4. Enable the following settings:

### ✅ Required Status Checks

- `test-and-build` (from ci.yml)
- `pr-checks` (from pr-checks.yml)

### ✅ Additional Settings

- ✅ Require branches to be up to date before merging
- ✅ Require linear history
- ✅ Include administrators
- ✅ Restrict pushes that create files larger than 100MB

## Workflow Files Created

1. **`.github/workflows/ci.yml`** - Main CI pipeline

   - Runs on push to main/develop and PRs
   - Includes: type-check, lint, test, build, security scan

2. **`.github/workflows/test.yml`** - Test-only pipeline

   - Runs on push to main/develop and PRs
   - Matrix testing with Node 18.x and 20.x
   - Includes coverage reporting

3. **`.github/workflows/pr-checks.yml`** - PR-specific checks
   - Runs only on pull requests
   - Posts coverage results as PR comments
   - Blocks merging if any check fails

## Benefits

- ✅ Prevents merging broken code
- ✅ Ensures all tests pass before merge
- ✅ Type safety verification
- ✅ Code quality checks (linting)
- ✅ Build verification
- ✅ Security scanning
- ✅ Coverage reporting
- ✅ PR comments with test results

## Next Steps

1. Push these workflow files to your repository
2. Configure branch protection rules as described above
3. Test by creating a PR with failing tests (should be blocked)
4. Test by creating a PR with passing tests (should be allowed)
