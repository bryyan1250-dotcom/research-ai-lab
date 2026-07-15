# RAL-006: Repository Architecture

## Purpose

The repository should function as both a public front door and a durable knowledge system.

## Top-Level Files

- `README.md`: Project introduction and navigation hub
- `LICENSE`: Legal framework for open use and contribution
- `CONTRIBUTING.md`: Participation guidelines
- `CODE_OF_CONDUCT.md`: Community standards
- `CHANGELOG.md`: Release history
- `SECURITY.md`: Integrity and disclosure policy
- `ROADMAP.md`: Release logic and future direction

## Folder Structure

- `docs/`: Foundational and normative documents
- `labs/`: Applied domain labs
- `toolkit/`: Official toolkit specifications and assets
- `prompts/`: Curated prompts mapped to research stages
- `resources/`: Supporting references, glossaries, and utilities
- `assets/`: Brand and visual assets
- `examples/`: Worked examples and demonstrations
- `templates/`: Reusable document and workflow templates
- `community/`: Participation models and community-facing materials

## Naming Conventions

- Root standards files use uppercase conventional names where appropriate
- Normative documents use `RAL-###-descriptive-name.md`
- Labs use lowercase folder names with concise domain identifiers
- Templates and resources use clear, descriptive, lowercase file names

## Documentation Standards

- Markdown first
- Clear heading hierarchy
- High scannability
- Stable internal linking
- Consistent front-matter conventions if metadata is later introduced

## Markdown Standards

- Use sentence-case headings inside documents unless a specific style guide evolves
- Prefer short paragraphs and flat bullet lists
- Use code fences only when structural clarity improves
- Avoid ornamental formatting

## Assets Organization

- `assets/brand/` for logos, marks, and visual identity
- `assets/diagrams/` for architectural visuals
- `assets/social/` for shareable media if later needed

## Versioning Strategy

- Semantic versioning for major published repository milestones
- Changelog entries for meaningful additions or revisions
- Major architecture changes should update roadmap and changelog together

## Documentation Lifecycle

- Draft
- Review
- Approved
- Archived if superseded

## Repository Quality Goals

The repository should remain:

- Easy to navigate
- Strong enough for public citation
- Clear enough for newcomers
- Structured enough for long-term scaling
