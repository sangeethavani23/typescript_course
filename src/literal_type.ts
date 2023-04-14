// Literal Types
// Can Give Exact or Specific values

// Consider the count should be 50 or 100

// let count: number = 50

// let count = 50

// let count: 50 | 100 = 50

type Count = 50 | 100

let count: Count = 50

// Literal Types not only for Numbers

type Metric = 'cm' | 'inch'