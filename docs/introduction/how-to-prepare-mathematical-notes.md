---
title: How to Prepare Mathematical Notes
description: Standards for complete mathematical notes and responsible work with AI.
---

# How to Prepare Mathematical Notes

A mathematical note is not merely a place where an answer is recorded. Its purpose is to show how a problem is understood, how relevant information is selected, how a method is chosen, and how a conclusion follows from definitions, assumptions, and earlier results.

Mathematical expressions are compact. A single formula may contain several ideas at once: objects, operations, conditions, and logical relationships. Reading a formula therefore means more than pronouncing its symbols. A student should be able to explain what the objects represent, what operation is being performed, why the expression is meaningful, and what information the formula provides.

The same principle applies to writing. A sequence of formulas without explanatory sentences rarely communicates a complete mathematical argument. Formulas should be connected by words that explain their role. A good solution tells the reader why a calculation is being performed, which definition or theorem is being used, whether its assumptions are satisfied, and how the result answers the original question.

## Make the Note Self-Contained

Prepare one separate, self-contained note for each assigned problem, including all of its subparts. Begin by writing the problem or a complete and faithful formulation of it. The reader should not need to search through another document to discover what is being solved. After several weeks, you should still be able to open the note and understand both the question and the solution.

Identify what is given and what must be found, proved, or explained. Introduce the relevant notation and determine what kinds of mathematical objects appear in the problem. Before calculating, ask what information is available and what would count as a satisfactory answer.

## Make the Reasoning Visible

Present the principal idea or method before, or while, carrying out the calculation. Important transitions should be explained with complete sentences. For example:

- Because the determinant is non-zero, the matrix is invertible.
- We may therefore multiply both sides by the inverse matrix.
- By the definition of the derivative, we consider the following limit.
- Since the direction vector is non-zero, it determines a line.
- Substituting the result into the original equation verifies the solution.

Such sentences are not decoration around the mathematics. They are part of the mathematics because they show the logical relationship between successive formulas.

It is not necessary to describe every elementary arithmetic operation. The amount of explanation should be proportional to the problem. A simple exercise may require only a few sentences, while a more substantial problem may require a longer argument. The goal is not to make every note long. The goal is to make every essential step understandable and justified.

> Write as briefly as possible, but as completely as necessary.

## A Complete Solution

A complete note should make the following five stages visible:

1. **Understand the problem.**  
   Record the problem, identify the given information, and state clearly what must be found, proved, or explained.

2. **Choose a method.**  
   Select the definitions, theorems, or techniques that connect the available information with the goal.

3. **Construct the argument.**  
   Carry out the necessary steps and connect formulas with sentences that explain why each important transition is valid.

4. **Verify the result.**  
   Check calculations, assumptions, domain restrictions, or geometric meaning whenever appropriate.

5. **State the conclusion.**  
   Answer the original question clearly and in its proper context.

A result without its context is not a complete solution. A bare final answer, an unexplained sequence of formulas, or a few unconnected calculations will be treated as incomplete work and should be revised.

Quality cannot be replaced by quantity, but quality does not remove the obligation to complete the assigned work. Students are expected to prepare separate, complete solutions for the entire assigned problem set. Producing many unexplained answers is insufficient, but preparing one polished solution while ignoring the remaining problems is also insufficient.

## Working with AI

We are studying in an age in which AI tools are widely available. The free versions of these tools are sufficient for the kinds of support expected in this course: asking questions, clarifying notation, generating simpler examples, checking reasoning, identifying missing steps, and improving the organisation of mathematical writing. Access to expensive software is not required.

AI should be used as an individual learning assistant. It may help transform rough calculations into clear mathematical prose, but it does not replace the student's mathematical work. Receiving a well-written answer is not the same as understanding it. The student remains responsible for checking every definition, calculation, assumption, conclusion, and formula included in the submitted note.

Use AI with a focused context. Work on one problem at a time and prepare one complete note for that problem. Do not paste an entire problem set into a single conversation and request all answers at once. Handling many unrelated tasks together encourages brief, generic, and mathematically weak notes. Focused work makes it easier to question each step, identify missing justifications, and produce a solution that can be understood and presented.

The one-problem-at-a-time principle does not mean that only one problem from the set should be prepared. Students are expected to repeat this focused process for every problem in the complete assigned set.

A polished AI-generated note is insufficient if the student cannot read its formulas, explain its terminology, justify its transitions, or present the argument independently. When using AI, ask not only for a solution, but also questions that deepen understanding:

- What does this formula mean?
- What mathematical object does each symbol represent?
- Why is this step valid?
- Which definition or theorem is being used?
- Are the assumptions of the theorem satisfied?
- Is there a simpler way to explain this transition?
- How can the result be checked?
- What should I be able to explain during class?

Preparing notes in this way is part of learning mathematics. It develops the ability to read notation, recognise mathematical objects, organise information, construct arguments, and communicate ideas precisely. Repeating this process for the complete problem set builds the habits of systematic and conscientious work that should accompany the student throughout university study and later professional life.

## Student GitHub Workspace

The current instructions, problem templates, and technical workflow for student work are maintained in the public repository [`dchorazkiewicz/Math_Problems_Repo`](https://github.com/dchorazkiewicz/Math_Problems_Repo). Students should create a public fork of this repository and commit their notes to their own fork. The course repository is the common template; it is not the place where individual student solutions should be submitted.

The repository contains a short map of the working process:

- `README.md` explains the purpose and structure of the workspace and provides the weekly index;
- `SOURCE_MATERIAL.md` links the current lecture PDF and maps each week to the corresponding LaTeX problem source used by an AI assistant;
- `NOTE_GUIDELINES.md` defines the standard of a complete mathematical note;
- `AI_WORKFLOW.md` describes the one-problem-at-a-time workflow with AI, review, commits, presentation, feedback, and revision;
- `AGENTS.md` gives a connected AI assistant the operational rules for working safely in the student's fork;
- the `docs/` directory contains twelve weekly folders and one Markdown file for each problem.

The workspace uses Markdown for student notes, Git and GitHub for version history and public forks, MathJax for mathematical typesetting, MkDocs for the web presentation, and GitHub Actions for automatic validation and deployment. These instructions and templates may be updated independently of this PDF, so students should consult the repository for the current working procedure. The repository links back to this PDF and to its LaTeX sources. Students use the PDF as the readable course material containing the theory, definitions, examples, and problem sets. A connected AI assistant uses the current mapped LaTeX file as the exact machine-readable source of a selected problem statement.
