## Cobre

**Open infrastructure for power system computation. Built in Rust.**

Cobre is an ecosystem of Rust crates for power system analysis and optimization — from stochastic hydrothermal dispatch (SDDP) to power flow and beyond. A shared data model connects all tools: define your system once, analyze it from multiple angles.

### Repositories

| | Repository | Description |
|-|-----------|-------------|
| ⚡ | [**cobre**](https://github.com/cobre-rs/cobre) | Main workspace — core data model, IO, SDDP solver, CLI |
| 📡 | [**ferrompi**](https://github.com/cobre-rs/ferrompi) | MPI 4.x bindings for Rust via FFI |
| 📖 | [**cobre-docs**](https://github.com/cobre-rs/cobre-docs) | Documentation and algorithm references |

### Status

Cobre is under active development. The SDDP solver specification is in progress; implementation follows. See the [roadmap](https://github.com/cobre-rs/cobre#roadmap) for planned milestones.

### Get involved

- 💬 [Discussions](https://github.com/cobre-rs/cobre/discussions) — questions, ideas, feedback
- 🐛 [Issues](https://github.com/cobre-rs/cobre/issues) — bug reports and feature requests
- 📋 [Contributing guide](https://github.com/cobre-rs/cobre/blob/main/CONTRIBUTING.md)