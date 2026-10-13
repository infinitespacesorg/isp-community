---
# SYNCED COPY - do not edit. Generated from business/recruiting/roles/; see business/recruiting/roles/README.md.
title: Real-time Engineer
department: Engineering
location: Seattle, WA
type: Full Time, founder equity
workplace: Remote OK
posted: 2026-10-11T00:00:00.000Z
summary: Make real-time state hold up in PlayBox, so many people can author one living world at once.
visible: true
showBenefits: false
role: ../roles/real-time-engineer.md
---
Infinite Spaces builds the PlayBox, where creators author living worlds that an audience helps shape, and
pilot new forms of play and social entertainment into any place: a venue, a live stream, a home. 
Underneath is a mesh network people join from any device, so a world can be authored and run by many people at once from anywhere.

You'll be working on PlayBox, the app creators use to author and run those worlds. Under the hood is a
Rust platform on a game engine, CRDT-based collaboration over a self-hosted mesh, real-time transport, 
agents as collaborators, and CLI/MCP orchestration across a growing library of 
production tools like TouchDesigner, Unreal/Unity engine, or Blender.

The shared-state layer already exists and runs. This role makes it hold up when several people are in one
world at once.

## What You'll Do

- Keep state in sync at frame rate across devices, inputs, and outputs on the mesh, in the right order
- Make multi-author editing converge: three or more people in one world, with no lost updates
- Build and tune the real-time transport paths on MoQ and WebRTC
- Own the latency budget for state: backpressure, queue depth, frame pacing
- Work full-stack in PlayBox, with Rust underneath and TypeScript on top
- Prove it with tests that run in CI, not just demos

## What We're Looking For

- Production-level Rust systems engineering
- Distributed systems experience: event-driven state sync, and how it fails
- CRDTs and mesh networking in practice (Automerge, Loro, Yjs, or similar)
- Real-time constraint thinking: latency budgets and backpressure, frame-accurate rather than just fast
- Range across Rust and Python, full-stack JS/TS, and LLM integration
- You can describe a system precisely enough for an AI to scaffold it
- Game development, game networking, or Kubernetes and control-plane experience is a bonus
