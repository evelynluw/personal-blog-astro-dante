---
title: '“Zoom Breakout Rooms” Graph Problem Solver'
description: Final project for UC Berkeley's algorithms class, solved with mixed ILP using Python, IBM CPLEX Optimizer.
publishDate: 'Sep 2 2021'
isFeatured: true
seo:
  image:
    src: '/PLACEHOLDER.jpg'
    alt: PLACEHOLDER
---

[Github Repo](https://github.com/evelynluw/cs170-proj-zoom-breakout-rooms)

This is the final project for my Cal CS170 Algorithms class. I worked mostly independently for this project. We had almost complete freedom for choosing our own methods to solve this project (and it was before the age of ChatGPT). I chose an approach to break down the problem as "mixed" integer linear programming, and I utilized [IBM CPLEX Optimizer](https://www.ibm.com/products/ilog-cplex-optimization-studio/cplex-optimizer) to obtain the results. 

## The Problem

This is a constrained optimization problem. Each pair of students `i`, `j` have corresponding `s_i,j` and `h_i,j` for stress and happiness. Imagine a complex social network where for some pairs of students they have unbreakable lifetime friendship (a very high `h_i,j` value), and some other pairs eternal beef (a very high `s_i,j` value). The goal is to assign them to k rooms and maximize the total happiness value H while keeping total stress below S_max/k. Read the multi-page [problem statement](https://drive.google.com/file/d/1gVRdr8cV3oXGI6lyRvB0CuJocENiIGyw/view?usp=sharing) by my CS170 department if you're interested. 

Check out [`breakout-rooms.ipynb` on my Github](https://github.com/evelynluw/cs170-proj-zoom-breakout-rooms/blob/master/breakout-rooms.ipynb) for code at the exploration stage including outputs with longer comments related to breaking down and modeling the problem. [`cp_optimize.ipynb`](https://github.com/evelynluw/cs170-proj-zoom-breakout-rooms/blob/master/cp_optimize.ipynb) has the final code with some inline comments. 

The optimizer used was IBM's CPLEX, more specifically the python package DOcplex. Ref: [IBM Decision Optimization CPLEX Python library (DOcplex) documentation](https://ibmdecisionoptimization.github.io/docplex-doc/) 


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA2MTAzNjUzNV19
-->