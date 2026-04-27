<p align="center">
  <img src="https://raw.githubusercontent.com/cobre-rs/.github/main/assets/org-banner.png" alt="Cobre — Open infrastructure for power system computation" width="100%">
</p>

<p align="center">
  <strong>Open infrastructure for power system computation</strong>
</p>

<p align="center">
  <a href="https://cobre-rs.dev">Website</a> ·
  <a href="https://docs.cobre-rs.dev">Documentation</a> ·
  <a href="https://pypi.org/project/cobre-python/">PyPI</a>
</p>

---

**Cobre** is an open-source ecosystem for power system optimization, starting
with SDDP-based hydrothermal dispatch. Built in Rust, with Python bindings
via Apache Arrow.

- **`cobre`** — the core solver: SDDP with FPHA, PAR(p) estimation, CVaR,
  MPI distribution, and 3,522 tests
- **`cobre-python`** — Python bindings with Arrow zero-copy to polars/pandas
- **`cobre-bridge`** — convert and compare cases from existing formats

→ [Get started](https://docs.cobre-rs.dev/tutorial/quickstart)
→ [Coming from an existing solver?](https://docs.cobre-rs.dev/guide/cobre-bridge)
→ [Python quickstart](https://docs.cobre-rs.dev/guide/python-quickstart)
