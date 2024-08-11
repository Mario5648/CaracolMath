const ALGEBRA_ONE_QUESTIONS = [
    {
      question: "Solve for \\(x\\): \\(2x + 3 = 11\\)",
      answer: "\\(x = 4\\)",
      choices: ["\\(x = 3\\)", "\\(x = 4\\)", "\\(x = 5\\)", "\\(x = 6\\)"],
      answerIndex: 1,
      explanation: "Subtract 3 from both sides to get \\(2x = 8\\). Then, divide by 2 to get \\(x = 4\\)."
    },
    {
      question: "Simplify: \\(3x^2 + 5x - 2x^2 + x\\)",
      answer: "\\(x^2 + 6x\\)",
      choices: ["\\(x^2 + 6x\\)", "\\(x^2 + 4x\\)", "\\(5x^2 + 6x\\)", "\\(x^2 - 6x\\)"],
      answerIndex: 0,
      explanation: "Combine like terms: \\(3x^2 - 2x^2 = x^2\\) and \\(5x + x = 6x\\)."
    },
    {
      question: "Factor the quadratic expression: \\(x^2 - 5x + 6\\)",
      answer: "\\((x - 2)(x - 3)\\)",
      choices: ["\\((x - 2)(x + 3)\\)", "\\((x + 2)(x + 3)\\)", "\\((x - 2)(x - 3)\\)", "\\((x + 2)(x - 3)\\)"],
      answerIndex: 2,
      explanation: "Find two numbers that multiply to 6 and add to -5: \\(-2\\) and \\(-3\\)."
    },
    {
      question: "Solve for \\(y\\): \\(2y - 7 = 3y + 2\\)",
      answer: "\\(y = -9\\)",
      choices: ["\\(y = -9\\)", "\\(y = 9\\)", "\\(y = -7\\)", "\\(y = 7\\)"],
      answerIndex: 0,
      explanation: "Subtract \\(2y\\) from both sides to get \\(-7 = y + 2\\). Then, subtract 2 to find \\(y = -9\\)."
    },
    {
      question: "Expand the expression: \\((x + 4)(x - 2)\\)",
      answer: "\\(x^2 + 2x - 8\\)",
      choices: ["\\(x^2 + 6x - 8\\)", "\\(x^2 - 2x - 8\\)", "\\(x^2 + 2x - 8\\)", "\\(x^2 - 2x + 8\\)"],
      answerIndex: 2,
      explanation: "Use the distributive property: \\(x(x - 2) + 4(x - 2)\\) which simplifies to \\(x^2 + 2x - 8\\)."
    },
    {
      question: "What is the slope of the line passing through the points \\((2, 3)\\) and \\((4, 7)\\)?",
      answer: "\\(m = 2\\)",
      choices: ["\\(m = 2\\)", "\\(m = 1\\)", "\\(m = \\frac{1}{2}\\)", "\\(m = 4\\)"],
      answerIndex: 0,
      explanation: "The slope is calculated by \\(m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{4 - 2} = 2\\)."
    },
    {
      question: "Solve for \\(x\\): \\(\\frac{2x - 3}{4} = 5\\)",
      answer: "\\(x = 11\\)",
      choices: ["\\(x = 10\\)", "\\(x = 11\\)", "\\(x = 12\\)", "\\(x = 13\\)"],
      answerIndex: 1,
      explanation: "Multiply both sides by 4 to get \\(2x - 3 = 20\\). Then add 3 and divide by 2: \\(x = 11\\)."
    },
    {
      question: "Find the value of \\(k\\) such that \\(2x^2 + kx + 3\\) is a perfect square trinomial.",
      answer: "\\(k = 4\\)",
      choices: ["\\(k = 2\\)", "\\(k = 4\\)", "\\(k = 6\\)", "\\(k = 8\\)"],
      answerIndex: 1,
      explanation: "A perfect square trinomial has the form \\(a^2 + 2ab + b^2\\). Here, \\(b = 2\\), so \\(k = 2 \\times 2 \\times 2 = 4\\)."
    },
    {
      question: "Solve the system of equations: \\(x + y = 7\\) and \\(x - y = 1\\)",
      answer: "\\(x = 4, y = 3\\)",
      choices: ["\\(x = 4, y = 3\\)", "\\(x = 3, y = 4\\)", "\\(x = 5, y = 2\\)", "\\(x = 2, y = 5\\)"],
      answerIndex: 0,
      explanation: "Add the two equations to eliminate \\(y\\): \\(2x = 8\\), so \\(x = 4\\). Substitute into \\(x + y = 7\\) to find \\(y = 3\\)."
    },
    {
      question: "Simplify the expression: \\(4x(2x - 3) - 5(2x - 3)\\)",
      answer: "\\(3x(2x - 3)\\)",
      choices: ["\\(3x(2x - 3)\\)", "\\(3(2x - 3)\\)", "\\(9x(2x - 3)\\)", "\\(2x(2x - 3)\\)"],
      answerIndex: 0,
      explanation: "Factor out the common factor \\((2x - 3)\\) to get \\((4x - 5)(2x - 3)\\), simplifying to \\(3x(2x - 3)\\)."
    },
    {
      question: "Solve for \\(x\\): \\(x^2 - 9 = 0\\)",
      answer: "\\(x = 3, x = -3\\)",
      choices: ["\\(x = 3, x = -3\\)", "\\(x = 3\\)", "\\(x = -3\\)", "\\(x = 9\\)"],
      answerIndex: 0,
      explanation: "Factor the difference of squares: \\((x - 3)(x + 3) = 0\\). The solutions are \\(x = 3\\) and \\(x = -3\\)."
    },
    {
      question: "If \\(f(x) = 2x + 3\\), find \\(f(4)\\).",
      answer: "\\(f(4) = 11\\)",
      choices: ["\\(f(4) = 11\\)", "\\(f(4) = 10\\)", "\\(f(4) = 13\\)", "\\(f(4) = 12\\)"],
      answerIndex: 0,
      explanation: "Substitute \\(4\\) for \\(x\\): \\(f(4) = 2(4) + 3 = 8 + 3 = 11\\)."
    },
    {
      question: "What is the x-intercept of the line \\(2x - 3y = 6\\)?",
      answer: "\\(x = 3\\)",
      choices: ["\\(x = 3\\)", "\\(x = -3\\)", "\\(x = 6\\)", "\\(x = 0\\)"],
      answerIndex: 0,
      explanation: "Set \\(y = 0\\) and solve for \\(x\\): \\(2x = 6\\) so \\(x = 3\\)."
    },
    {
      question: "Factor completely: \\(4x^2 - 25\\)",
      answer: "\\((2x - 5)(2x + 5)\\)",
      choices: ["\\((2x - 5)(2x + 5)\\)", "\\((4x - 25)\\)", "\\((2x - 25)(2x + 25)\\)", "\\((x - 5)(x + 5)\\)"],
      answerIndex: 0,
      explanation: "This is a difference of squares: \\((2x)^2 - 5^2\\), which factors to \\((2x - 5)(2x + 5)\\)."
    },
    {
      question: "Solve for \\(x\\): \\(\\frac{x + 2}{3} - \\frac{2x - 1}{4} = 0\\)",
      answer: "\\(x = \\frac{5}{10} = 0.5\\)",
      choices: ["\\(x = 0.5\\)", "\\(x = 1\\)", "\\(x = -0.5\\)", "\\(x = 2\\)"],
      answerIndex: 0,
      explanation: "Find a common denominator and combine terms, then solve for \\(x\\)."
    },
    {
      question: "Simplify: \\(\\frac{3x^2 - 12}{x - 2}\\)",
      answer: "\\(3x + 6\\)",
      choices: ["\\(3x + 6\\)", "\\(3x - 6\\)", "\\(x + 4\\)", "\\(x - 4\\)"],
      answerIndex: 0,
      explanation: "Factor the numerator: \\(3(x^2 - 4)\\), and cancel with \\(x - 2\\) in the denominator."
    },
    {
      question: "Solve for \\(x\\): \\(3(x + 2) = 2(x - 5)\\)",
      answer: "\\(x = -11\\)",
      choices: ["\\(x = -11\\)", "\\(x = 11\\)", "\\(x = -13\\)", "\\(x = 13\\)"],
      answerIndex: 0,
      explanation: "Distribute and simplify: \\(3x + 6 = 2x - 10\\). Subtract \\(2x\\) and solve for \\(x\\)."
    },
    {
      question: "Expand and simplify: \\((x - 3)^2\\)",
      answer: "\\(x^2 - 6x + 9\\)",
      choices: ["\\(x^2 - 6x + 9\\)", "\\(x^2 - 9x + 6\\)", "\\(x^2 - 6x - 9\\)", "\\(x^2 + 9\\)"],
      answerIndex: 0,
      explanation: "Expand using \\((a - b)^2 = a^2 - 2ab + b^2\\)."
    },
    {
      question: "Solve the system of equations: \\(3x + y = 5\\) and \\(x - 2y = 4\\)",
      answer: "\\(x = 2, y = -1\\)",
      choices: ["\\(x = 2, y = -1\\)", "\\(x = -1, y = 2\\)", "\\(x = 1, y = 2\\)", "\\(x = 2, y = 1\\)"],
      answerIndex: 0,
      explanation: "Solve one equation for \\(y\\) and substitute into the other equation to find \\(x\\) and \\(y\\)."
    },
    {
      question: "Factor the expression: \\(x^2 - 16\\)",
      answer: "\\((x - 4)(x + 4)\\)",
      choices: ["\\((x - 4)(x + 4)\\)", "\\((x - 16)(x + 16)\\)", "\\((x - 8)(x + 8)\\)", "\\((x - 2)(x + 2)\\)"],
      answerIndex: 0,
      explanation: "This is a difference of squares: \\(x^2 - 16 = (x - 4)(x + 4)\\)."
    },
    {
      question: "What is the solution to the inequality \\(2x + 3 > 7\\)?",
      answer: "\\(x > 2\\)",
      choices: ["\\(x > 2\\)", "\\(x > 3\\)", "\\(x < 2\\)", "\\(x < 3\\)"],
      answerIndex: 0,
      explanation: "Subtract 3 from both sides to get \\(2x > 4\\), then divide by 2: \\(x > 2\\)."
    },
    {
      question: "Solve for \\(x\\): \\(5x - 3 = 2x + 12\\)",
      answer: "\\(x = 5\\)",
      choices: ["\\(x = 5\\)", "\\(x = 4\\)", "\\(x = 6\\)", "\\(x = 7\\)"],
      answerIndex: 0,
      explanation: "Subtract \\(2x\\) from both sides and add 3 to find \\(x = 5\\)."
    },
    {
      question: "What is the y-intercept of the line \\(y = 3x + 4\\)?",
      answer: "\\(y = 4\\)",
      choices: ["\\(y = 4\\)", "\\(y = 3\\)", "\\(y = -4\\)", "\\(y = -3\\)"],
      answerIndex: 0,
      explanation: "In the slope-intercept form \\(y = mx + b\\), \\(b\\) represents the y-intercept, which is 4."
    },
    {
      question: "Simplify the expression: \\(\\frac{6x^2y}{2xy}\\)",
      answer: "\\(3x\\)",
      choices: ["\\(3x\\)", "\\(6x\\)", "\\(x^2\\)", "\\(3y\\)"],
      answerIndex: 0,
      explanation: "Divide the coefficients and cancel like terms: \\(\\frac{6x^2y}{2xy} = 3x\\)."
    },
    {
      question: "Solve for \\(x\\): \\(\\frac{2x}{3} + 5 = 9\\)",
      answer: "\\(x = 6\\)",
      choices: ["\\(x = 6\\)", "\\(x = 4\\)", "\\(x = 8\\)", "\\(x = 10\\)"],
      answerIndex: 0,
      explanation: "Subtract 5 from both sides and multiply by 3/2 to find \\(x = 6\\)."
    },
    {
      question: "If \\(f(x) = x^2 - 3x + 2\\), find \\(f(2)\\).",
      answer: "\\(f(2) = 0\\)",
      choices: ["\\(f(2) = 0\\)", "\\(f(2) = 1\\)", "\\(f(2) = 2\\)", "\\(f(2) = -1\\)"],
      answerIndex: 0,
      explanation: "Substitute \\(2\\) for \\(x\\): \\(f(2) = 2^2 - 3(2) + 2 = 0\\)."
    },
    {
      question: "Solve for \\(x\\): \\(x^2 + 4x + 4 = 0\\)",
      answer: "\\(x = -2\\)",
      choices: ["\\(x = -2\\)", "\\(x = 2\\)", "\\(x = 4\\)", "\\(x = -4\\)"],
      answerIndex: 0,
      explanation: "Factor the equation: \\((x + 2)^2 = 0\\), so \\(x = -2\\)."
    },
    {
      question: "What is the solution to the inequality \\(x - 4 < 3\\)?",
      answer: "\\(x < 7\\)",
      choices: ["\\(x < 7\\)", "\\(x < -7\\)", "\\(x > 7\\)", "\\(x > -7\\)"],
      answerIndex: 0,
      explanation: "Add 4 to both sides to get \\(x < 7\\)."
    },
    {
      question: "Factor the quadratic expression: \\(x^2 + 7x + 10\\)",
      answer: "\\((x + 2)(x + 5)\\)",
      choices: ["\\((x + 2)(x + 5)\\)", "\\((x + 2)(x - 5)\\)", "\\((x - 2)(x + 5)\\)", "\\((x - 2)(x - 5)\\)"],
      answerIndex: 0,
      explanation: "Find two numbers that multiply to 10 and add to 7: 2 and 5."
    },
    {
      question: "Solve for \\(x\\): \\(\\frac{x - 3}{2} = 5\\)",
      answer: "\\(x = 13\\)",
      choices: ["\\(x = 13\\)", "\\(x = 11\\)", "\\(x = 15\\)", "\\(x = 12\\)"],
      answerIndex: 0,
      explanation: "Multiply by 2 and add 3 to both sides to solve for \\(x = 13\\)."
    }
  ];
  
const ALGEBRA_TWO_QUESTIONS = [
    {
      question: "Solve for \\(x\\) in the equation \\(2^{x+3} = 16\\)",
      answer: "\\(x = 1\\)",
      choices: ["\\(x = 2\\)", "\\(x = 1\\)", "\\(x = 0\\)", "\\(x = -1\\)"],
      answerIndex: 1,
      explanation: "Since \\(16 = 2^4\\), we can rewrite the equation as \\(2^{x+3} = 2^4\\). Therefore, \\(x + 3 = 4\\), so \\(x = 1\\)."
    },
    {
      question: "Simplify: \\(\\sqrt{50} - 3\\sqrt{2} + 2\\sqrt{8}\\)",
      answer: "\\(2\\sqrt{2}\\)",
      choices: ["\\(\\sqrt{2}\\)", "\\(2\\sqrt{2}\\)", "\\(3\\sqrt{2}\\)", "\\(4\\sqrt{2}\\)"],
      answerIndex: 1,
      explanation: "We simplify each term: \\(\\sqrt{50} = 5\\sqrt{2}\\), \\(2\\sqrt{8} = 4\\sqrt{2}\\). Combining like terms gives us \\(5\\sqrt{2} - 3\\sqrt{2} + 4\\sqrt{2} = 2\\sqrt{2}\\)."
    },
    {
      question: "Solve the quadratic equation: \\(x^2 - 4x - 5 = 0\\)",
      answer: "\\(x = 5, x = -1\\)",
      choices: ["\\(x = 5, x = -1\\)", "\\(x = -5, x = 1\\)", "\\(x = 4, x = -1\\)", "\\(x = 5, x = 1\\)"],
      answerIndex: 0,
      explanation: "Factor the quadratic as \\((x - 5)(x + 1) = 0\\). The solutions are \\(x = 5\\) and \\(x = -1\\)."
    },
    {
      question: "Simplify: \\(\\frac{4x^3y}{2xy^2}\\)",
      answer: "\\(2x^2y^{-1}\\)",
      choices: ["\\(2x^2y\\)", "\\(2x^2y^{-1}\\)", "\\(x^2y^{-1}\\)", "\\(4x^2y^{-1}\\)"],
      answerIndex: 1,
      explanation: "Simplify the expression by canceling out common factors: \\(\\frac{4x^3y}{2xy^2} = 2x^2y^{-1}\\)."
    },
    {
      question: "What is the sum of the roots of the quadratic equation \\(2x^2 - 3x + 1 = 0\\)?",
      answer: "\\(\\frac{3}{2}\\)",
      choices: ["\\(-\\frac{3}{2}\\)", "\\(\\frac{3}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)"],
      answerIndex: 1,
      explanation: "The sum of the roots of the quadratic equation \\(ax^2 + bx + c = 0\\) is given by \\(-\\frac{b}{a}\\). Here, \\(a = 2\\) and \\(b = -3\\), so the sum is \\(\\frac{3}{2}\\)."
    },
    {
      question: "Simplify: \\(\\log(1000)\\)",
      answer: "\\(3\\)",
      choices: ["\\(2\\)", "\\(3\\)", "\\(4\\)", "\\(5\\)"],
      answerIndex: 1,
      explanation: "\\(\\log(1000) = \\log(10^3) = 3\\log(10) = 3\\)."
    },
    {
      question: "Solve for \\(x\\) in the equation \\(3^x = 81\\)",
      answer: "\\(x = 4\\)",
      choices: ["\\(x = 4\\)", "\\(x = 3\\)", "\\(x = 2\\)", "\\(x = 5\\)"],
      answerIndex: 0,
      explanation: "Rewrite \\(81\\) as \\(3^4\\), so the equation becomes \\(3^x = 3^4\\). Thus, \\(x = 4\\)."
    },
    {
      question: "Simplify: \\(\\frac{4}{\\sqrt{2}}\\)",
      answer: "\\(2\\sqrt{2}\\)",
      choices: ["\\(2\\sqrt{2}\\)", "\\(4\\sqrt{2}\\)", "\\(\\sqrt{2}\\)", "\\(\\frac{2}{\\sqrt{2}}\\)"],
      answerIndex: 0,
      explanation: "Rationalize the denominator: \\(\\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}\\)."
    },
    {
      question: "Solve the equation: \\(\\log_x{25} = 2\\)",
      answer: "\\(x = 5\\)",
      choices: ["\\(x = 5\\)", "\\(x = 10\\)", "\\(x = 25\\)", "\\(x = 2\\)"],
      answerIndex: 0,
      explanation: "By the definition of logarithms, \\(x^2 = 25\\), so \\(x = 5\\)."
    },
    {
      question: "Find the inverse of the function \\(f(x) = 2x + 3\\).",
      answer: "\\(f^{-1}(x) = \\frac{x - 3}{2}\\)",
      choices: ["\\(f^{-1}(x) = \\frac{x + 3}{2}\\)", "\\(f^{-1}(x) = 2x - 3\\)", "\\(f^{-1}(x) = \\frac{x - 3}{2}\\)", "\\(f^{-1}(x) = \\frac{x + 3}{-2}\\)"],
      answerIndex: 2,
      explanation: "To find the inverse, swap \\(x\\) and \\(y\\) and solve for \\(y\\): \\(x = 2y + 3\\), so \\(y = \\frac{x - 3}{2}\\)."
    },
    {
      question: "Solve for \\(x\\): \\(x^3 - 8 = 0\\)",
      answer: "\\(x = 2\\)",
      choices: ["\\(x = 2\\)", "\\(x = -2\\)", "\\(x = 8\\)", "\\(x = -8\\)"],
      answerIndex: 0,
      explanation: "Add 8 to both sides and take the cube root: \\(x = \\sqrt[3]{8} = 2\\)."
    },
    {
      question: "If \\(f(x) = x^2 + 2x + 1\\), what is \\(f(-3)\\)?",
      answer: "\\(f(-3) = 4\\)",
      choices: ["\\(f(-3) = 4\\)", "\\(f(-3) = 1\\)", "\\(f(-3) = -4\\)", "\\(f(-3) = 9\\)"],
      answerIndex: 0,
      explanation: "Substitute \\(-3\\) into the function: \\(f(-3) = (-3)^2 + 2(-3) + 1 = 9 - 6 + 1 = 4\\)."
    },
    {
      question: "Simplify: \\(\\log{(x^2)}\\)",
      answer: "\\(2\\log{x}\\)",
      choices: ["\\(2\\log{x}\\)", "\\(\\log{x^2}\\)", "\\(\\frac{1}{2}\\log{x}\\)", "\\(\\log{x}\\)"],
      answerIndex: 0,
      explanation: "Use the logarithm power rule: \\(\\log{(x^2)} = 2\\log{x}\\)."
    },
    {
      question: "Solve the inequality: \\(x^2 - 4x > 5\\)",
      answer: "\\(x < -1\\) or \\(x > 5\\)",
      choices: ["\\(x < -1\\) or \\(x > 5\\)", "\\(x > -1\\) and \\(x < 5\\)", "\\(x < -5\\) or \\(x > 1\\)", "\\(x < 1\\) or \\(x > -5\\)"],
      answerIndex: 0,
      explanation: "Rearrange as \\(x^2 - 4x - 5 > 0\\) and factor: \\((x - 5)(x + 1) > 0\\). The solution is where the product is positive: \\(x < -1\\) or \\(x > 5\\)."
    },
    {
      question: "Simplify: \\(\\frac{(x^3 y^2)(xy)}{(x^2 y)}\\)",
      answer: "\\(x^2 y^2\\)",
      choices: ["\\(x^2 y\\)", "\\(x^4 y^2\\)", "\\(x^2 y^2\\)", "\\(xy\\)"],
      answerIndex: 2,
      explanation: "Simplify the numerator and denominator separately and then divide: \\(\\frac{x^4 y^3}{x^2 y} = x^2 y^2\\)."
    },
    {
      question: "Solve for \\(x\\) in the equation \\(4x^2 = 25\\)",
      answer: "\\(x = \\pm \\frac{5}{2}\\)",
      choices: ["\\(x = \\pm \\frac{5}{4}\\)", "\\(x = \\pm \\frac{5}{2}\\)", "\\(x = \\pm 5\\)", "\\(x = \\pm \\frac{25}{4}\\)"],
      answerIndex: 1,
      explanation: "Divide by 4 and take the square root: \\(x = \\pm \\frac{\\sqrt{25}}{2} = \\pm \\frac{5}{2}\\)."
    },
    {
      question: "What is the product of the roots of the quadratic equation \\(2x^2 - 5x + 3 = 0\\)?",
      answer: "\\(\\frac{3}{2}\\)",
      choices: ["\\(\\frac{3}{2}\\)", "\\(\\frac{5}{2}\\)", "\\(\\frac{2}{3}\\)", "\\(\\frac{1}{2}\\)"],
      answerIndex: 0,
      explanation: "The product of the roots of the quadratic equation \\(ax^2 + bx + c = 0\\) is given by \\(\\frac{c}{a}\\). Here, \\(a = 2\\) and \\(c = 3\\), so the product is \\(\\frac{3}{2}\\)."
    },
    {
      question: "Simplify: \\((2x - 3)(x + 5)\\)",
      answer: "\\(2x^2 + 7x - 15\\)",
      choices: ["\\(2x^2 + 7x - 15\\)", "\\(2x^2 + 7x + 15\\)", "\\(x^2 - 7x - 15\\)", "\\(x^2 + 7x + 15\\)"],
      answerIndex: 0,
      explanation: "Use the distributive property (FOIL method) to expand the expression: \\((2x - 3)(x + 5) = 2x^2 + 7x - 15\\)."
    },
    {
      question: "Solve the equation: \\(\\log_2{x} = 5\\)",
      answer: "\\(x = 32\\)",
      choices: ["\\(x = 16\\)", "\\(x = 32\\)", "\\(x = 64\\)", "\\(x = 8\\)"],
      answerIndex: 1,
      explanation: "Rewrite the logarithmic equation as \\(x = 2^5 = 32\\)."
    },
    {
      question: "Solve for \\(x\\) in the equation \\(x^2 + 6x + 9 = 0\\)",
      answer: "\\(x = -3\\)",
      choices: ["\\(x = -3\\)", "\\(x = 3\\)", "\\(x = \\pm 3\\)", "\\(x = 0\\)"],
      answerIndex: 0,
      explanation: "Factor the quadratic equation as \\((x + 3)^2 = 0\\). The solution is \\(x = -3\\)."
    },
    {
      question: "Simplify: \\(\\frac{6}{2} \\cdot \\sqrt{16}\\)",
      answer: "\\(12\\)",
      choices: ["\\(8\\)", "\\(12\\)", "\\(16\\)", "\\(24\\)"],
      answerIndex: 1,
      explanation: "First, simplify \\(\\sqrt{16} = 4\\), and then calculate \\(\\frac{6}{2} \\cdot 4 = 12\\)."
    },
    {
      question: "Solve the inequality: \\(3x + 2 \\leq 11\\)",
      answer: "\\(x \\leq 3\\)",
      choices: ["\\(x \\leq 3\\)", "\\(x \\geq 3\\)", "\\(x \\leq 2\\)", "\\(x \\geq 2\\)"],
      answerIndex: 0,
      explanation: "Subtract 2 from both sides and divide by 3: \\(x \\leq 3\\)."
    },
    {
      question: "Simplify: \\(\\frac{x^2 - 9}{x + 3}\\)",
      answer: "\\(x - 3\\)",
      choices: ["\\(x + 3\\)", "\\(x - 3\\)", "\\(x^2 - 3\\)", "\\(x + 9\\)"],
      answerIndex: 1,
      explanation: "Factor the numerator as \\((x - 3)(x + 3)\\) and cancel \\(x + 3\\), leaving \\(x - 3\\)."
    },
    {
      question: "What is the value of \\(\\sin{\\frac{\\pi}{6}}\\)?",
      answer: "\\(\\frac{1}{2}\\)",
      choices: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(1\\)", "\\(0\\)"],
      answerIndex: 0,
      explanation: "The sine of \\(30^\\circ\\) or \\(\\frac{\\pi}{6}\\) is \\(\\frac{1}{2}\\)."
    },
    {
      question: "Solve for \\(x\\) in the equation \\(\\frac{x}{2} = \\frac{3}{4}\\)",
      answer: "\\(x = \\frac{3}{2}\\)",
      choices: ["\\(x = \\frac{1}{2}\\)", "\\(x = \\frac{3}{2}\\)", "\\(x = 1\\)", "\\(x = 2\\)"],
      answerIndex: 1,
      explanation: "Multiply both sides by 2 to get \\(x = \\frac{3}{2}\\)."
    },
    {
      question: "Simplify the expression: \\((x^2 - 4x + 4)^{\\frac{1}{2}}\\)",
      answer: "\\(x - 2\\)",
      choices: ["\\(x - 2\\)", "\\(x + 2\\)", "\\(\\sqrt{x^2 - 4x + 4}\\)", "\\(x^2 - 2x + 2\\)"],
      answerIndex: 0,
      explanation: "Recognize that \\(x^2 - 4x + 4 = (x - 2)^2\\), so \\((x^2 - 4x + 4)^{\\frac{1}{2}} = x - 2\\)."
    },
    {
      question: "What is the value of \\(\\cos{\\frac{\\pi}{3}}\\)?",
      answer: "\\(\\frac{1}{2}\\)",
      choices: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(1\\)", "\\(0\\)"],
      answerIndex: 0,
      explanation: "The cosine of \\(60^\\circ\\) or \\(\\frac{\\pi}{3}\\) is \\(\\frac{1}{2}\\)."
    },
    {
      question: "Solve the inequality: \\(2(x - 1) > 3x + 4\\)",
      answer: "\\(x < -6\\)",
      choices: ["\\(x > -6\\)", "\\(x < -6\\)", "\\(x > 6\\)", "\\(x < 6\\)"],
      answerIndex: 1,
      explanation: "Expand and simplify: \\(2x - 2 > 3x + 4\\), subtract \\(2x\\) and subtract 4 to get \\(-6 > x\\), which means \\(x < -6\\)."
    },
    {
      question: "Simplify: \\(\\log_a{(xy)}\\)",
      answer: "\\(\\log_a{x} + \\log_a{y}\\)",
      choices: ["\\(\\log_a{x} + \\log_a{y}\\)", "\\(\\log_a{x} - \\log_a{y}\\)", "\\(\\log_a{xy}\\)", "\\(\\log_a{\\frac{x}{y}}\\)"],
      answerIndex: 0,
      explanation: "Use the logarithm product rule: \\(\\log_a{(xy)} = \\log_a{x} + \\log_a{y}\\)."
    },
    {
      question: "Solve for \\(x\\) in the equation \\(2e^x = 10\\)",
      answer: "\\(x = \\ln{5}\\)",
      choices: ["\\(x = \\ln{2}\\)", "\\(x = \\ln{5}\\)", "\\(x = \\ln{10}\\)", "\\(x = 5\\)"],
      answerIndex: 1,
      explanation: "Divide by 2 and then take the natural logarithm: \\(e^x = 5\\) so \\(x = \\ln{5}\\)."
    },
    {
      question: "Simplify the expression: \\(\\frac{\\sqrt{72}}{\\sqrt{2}}\\)",
      answer: "\\(6\\)",
      choices: ["\\(8\\)", "\\(12\\)", "\\(6\\)", "\\(10\\)"],
      answerIndex: 2,
      explanation: "Simplify the square roots: \\(\\frac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{36} = 6\\)."
    }
  ];
  

const CALCULUS_ONE_QUESTIONS = [
    {
      question: "Find the derivative of \\(f(x) = 3x^2 + 2x - 5\\).",
      answer: "\\(f'(x) = 6x + 2\\)",
      choices: [
        "\\(f'(x) = 6x + 2\\)",
        "\\(f'(x) = 6x - 2\\)",
        "\\(f'(x) = 3x + 2\\)",
        "\\(f'(x) = 2x + 6\\)"
      ],
      answerIndex: 0,
      explanation: "Apply the power rule: the derivative of \\(3x^2\\) is \\(6x\\), and the derivative of \\(2x\\) is \\(2\\)."
    },
    {
      question: "Evaluate the limit \\(\\lim_{x \\to 2} (x^2 - 4)\\).",
      answer: "\\(0\\)",
      choices: [
        "\\(0\\)",
        "\\(4\\)",
        "\\(8\\)",
        "\\(-4\\)"
      ],
      answerIndex: 0,
      explanation: "Substitute \\(x = 2\\) directly into the function: \\(2^2 - 4 = 0\\)."
    },
    {
      question: "Find the derivative of \\(f(x) = e^x\\).",
      answer: "\\(f'(x) = e^x\\)",
      choices: [
        "\\(f'(x) = e^x\\)",
        "\\(f'(x) = x e^{x-1}\\)",
        "\\(f'(x) = x e^x\\)",
        "\\(f'(x) = e^{x-1}\\)"
      ],
      answerIndex: 0,
      explanation: "The derivative of \\(e^x\\) with respect to \\(x\\) is \\(e^x\\)."
    },
    {
      question: "Evaluate \\(\\int 3x^2 dx\\).",
      answer: "\\(x^3 + C\\)",
      choices: [
        "\\(x^3 + C\\)",
        "\\(3x^3 + C\\)",
        "\\(\\frac{3x^3}{3} + C\\)",
        "\\(\\frac{3x^3}{2} + C\\)"
      ],
      answerIndex: 0,
      explanation: "Use the power rule for integration: \\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\), so \\(\\int 3x^2 dx = x^3 + C\\)."
    },
    {
      question: "Find the critical points of \\(f(x) = x^3 - 3x^2 + 4\\).",
      answer: "\\(x = 0\\) and \\(x = 2\\)",
      choices: [
        "\\(x = 0\\) and \\(x = 2\\)",
        "\\(x = 1\\) and \\(x = -2\\)",
        "\\(x = 3\\) and \\(x = 2\\)",
        "\\(x = -1\\) and \\(x = 0\\)"
      ],
      answerIndex: 0,
      explanation: "Find the derivative: \\(f'(x) = 3x^2 - 6x\\). Set the derivative to zero and solve: \\(3x(x - 2) = 0\\), so \\(x = 0\\) and \\(x = 2\\)."
    },
    {
      question: "Find the derivative of \\(f(x) = \\sin(x)\\).",
      answer: "\\(f'(x) = \\cos(x)\\)",
      choices: [
        "\\(f'(x) = \\cos(x)\\)",
        "\\(f'(x) = -\\cos(x)\\)",
        "\\(f'(x) = \\sin(x)\\)",
        "\\(f'(x) = -\\sin(x)\\)"
      ],
      answerIndex: 0,
      explanation: "The derivative of \\(\\sin(x)\\) with respect to \\(x\\) is \\(\\cos(x)\\)."
    },
    {
      question: "Evaluate the limit \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\).",
      answer: "\\(1\\)",
      choices: [
        "\\(1\\)",
        "\\(0\\)",
        "\\(\\infty\\)",
        "\\(-1\\)"
      ],
      answerIndex: 0,
      explanation: "This is a standard limit in calculus: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1\\)."
    },
    {
      question: "Find the second derivative of \\(f(x) = x^4 - 2x^3 + x - 5\\).",
      answer: "\\(f''(x) = 12x^2 - 12x\\)",
      choices: [
        "\\(f''(x) = 12x^2 - 12x\\)",
        "\\(f''(x) = 12x^2 + 6x\\)",
        "\\(f''(x) = 24x - 12\\)",
        "\\(f''(x) = 24x^2 - 6x\\)"
      ],
      answerIndex: 0,
      explanation: "First, find the first derivative: \\(f'(x) = 4x^3 - 6x^2 + 1\\). Then, differentiate again to get the second derivative: \\(f''(x) = 12x^2 - 12x\\)."
    },
    {
      question: "Find the integral \\(\\int \\cos(x) dx\\).",
      answer: "\\(\\sin(x) + C\\)",
      choices: [
        "\\(\\sin(x) + C\\)",
        "\\(-\\sin(x) + C\\)",
        "\\(\\cos(x) + C\\)",
        "\\(-\\cos(x) + C\\)"
      ],
      answerIndex: 0,
      explanation: "The integral of \\(\\cos(x)\\) with respect to \\(x\\) is \\(\\sin(x) + C\\)."
    },
    {
      question: "Evaluate \\(\\lim_{x \\to \\infty} \\frac{1}{x}\\).",
      answer: "\\(0\\)",
      choices: [
        "\\(0\\)",
        "\\(1\\)",
        "\\(\\infty\\)",
        "\\(-\\infty\\)"
      ],
      answerIndex: 0,
      explanation: "As \\(x\\) approaches infinity, \\(\\frac{1}{x}\\) approaches 0."
    },
    {
      question: "Find the derivative of \\(f(x) = \\ln(x)\\).",
      answer: "\\(f'(x) = \\frac{1}{x}\\)",
      choices: [
        "\\(f'(x) = \\frac{1}{x}\\)",
        "\\(f'(x) = \\ln(x)\\)",
        "\\(f'(x) = e^x\\)",
        "\\(f'(x) = x\\)"
      ],
      answerIndex: 0,
      explanation: "The derivative of \\(\\ln(x)\\) with respect to \\(x\\) is \\(\\frac{1}{x}\\)."
    },
    {
      question: "Evaluate \\(\\int 2x e^{x^2} dx\\).",
      answer: "\\(e^{x^2} + C\\)",
      choices: [
        "\\(e^{x^2} + C\\)",
        "\\(2xe^{x^2} + C\\)",
        "\\(e^{2x} + C\\)",
        "\\(x e^{x^2} + C\\)"
      ],
      answerIndex: 0,
      explanation: "Use substitution: let \\(u = x^2\\), then \\(du = 2x dx\\), so the integral becomes \\(\\int e^u du = e^u + C = e^{x^2} + C\\)."
    },
    {
      question: "Find the critical points of \\(f(x) = x^3 - 6x^2 + 9x + 2\\).",
      answer: "\\(x = 1\\) and \\(x = 3\\)",
      choices: [
        "\\(x = 1\\) and \\(x = 3\\)",
        "\\(x = 0\\) and \\(x = 2\\)",
        "\\(x = -1\\) and \\(x = 3\\)",
        "\\(x = 2\\) and \\(x = 3\\)"
      ],
      answerIndex: 0,
      explanation: "Find the first derivative: \\(f'(x) = 3x^2 - 12x + 9\\). Set it to zero and solve: \\(3(x^2 - 4x + 3) = 0\\), so \\(x = 1\\) and \\(x = 3\\)."
    },
    {
      question: "Find the derivative of \\(f(x) = \\tan(x)\\).",
      answer: "\\(f'(x) = \\sec^2(x)\\)",
      choices: [
        "\\(f'(x) = \\sec^2(x)\\)",
        "\\(f'(x) = \\csc^2(x)\\)",
        "\\(f'(x) = \\cos^2(x)\\)",
        "\\(f'(x) = -\\sin^2(x)\\)"
      ],
      answerIndex: 0,
      explanation: "The derivative of \\(\\tan(x)\\) is \\(\\sec^2(x)\\)."
    },
    {
      question: "Evaluate \\(\\int \\sec^2(x) dx\\).",
      answer: "\\(\\tan(x) + C\\)",
      choices: [
        "\\(\\tan(x) + C\\)",
        "\\(\\sec(x) + C\\)",
        "\\(\\cos(x) + C\\)",
        "\\(\\sin(x) + C\\)"
      ],
      answerIndex: 0,
      explanation: "The integral of \\(\\sec^2(x)\\) with respect to \\(x\\) is \\(\\tan(x) + C\\)."
    },
    {
      question: "Find the limit \\(\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}\\).",
      answer: "\\(\\frac{1}{2}\\)",
      choices: [
        "\\(\\frac{1}{2}\\)",
        "\\(1\\)",
        "\\(0\\)",
        "\\(\\infty\\)"
      ],
      answerIndex: 0,
      explanation: "Use the Taylor series expansion for \\(\\cos(x)\\) around 0: \\(\\cos(x) \\approx 1 - \\frac{x^2}{2}\\). Substituting this into the limit gives \\(\\lim_{x \\to 0} \\frac{1 - (1 - \\frac{x^2}{2})}{x^2} = \\frac{1}{2}\\)."
    },
    {
      question: "Differentiate \\(f(x) = x^2 \\cdot \\ln(x)\\).",
      answer: "\\(f'(x) = 2x \\ln(x) + x\\)",
      choices: [
        "\\(f'(x) = 2x \\ln(x) + x\\)",
        "\\(f'(x) = x^2 \\cdot \\frac{1}{x}\\)",
        "\\(f'(x) = 2x \\cdot \\ln(x)\\)",
        "\\(f'(x) = x^2 \\cdot \\ln(x)\\)"
      ],
      answerIndex: 0,
      explanation: "Use the product rule: \\(f'(x) = x^2 \\cdot \\frac{1}{x} + 2x \\cdot \\ln(x) = 2x \\ln(x) + x\\)."
    },
    {
      question: "Evaluate \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\).",
      answer: "\\(4\\)",
      choices: [
        "\\(4\\)",
        "\\(0\\)",
        "\\(2\\)",
        "\\(\\infty\\)"
      ],
      answerIndex: 0,
      explanation: "Factor the numerator: \\(\\frac{(x - 2)(x + 2)}{x - 2}\\). Cancel the \\(x - 2\\) terms, and substitute \\(x = 2\\) into \\(x + 2\\) to get 4."
    },
    {
      question: "Find the maximum value of \\(f(x) = -x^2 + 4x + 5\\).",
      answer: "\\(9\\)",
      choices: [
        "\\(9\\)",
        "\\(5\\)",
        "\\(7\\)",
        "\\(11\\)"
      ],
      answerIndex: 0,
      explanation: "Find the vertex using \\(x = -\\frac{b}{2a}\\). Here, \\(a = -1\\), \\(b = 4\\), so \\(x = 2\\). Substituting into \\(f(x)\\) gives \\(f(2) = -4 + 8 + 5 = 9\\)."
    },
    {
      question: "Differentiate \\(f(x) = \\cos(2x)\\).",
      answer: "\\(f'(x) = -2\\sin(2x)\\)",
      choices: [
        "\\(f'(x) = -2\\sin(2x)\\)",
        "\\(f'(x) = 2\\cos(2x)\\)",
        "\\(f'(x) = \\sin(2x)\\)",
        "\\(f'(x) = -\\cos(2x)\\)"
      ],
      answerIndex: 0,
      explanation: "Use the chain rule: \\(f'(x) = -\\sin(2x) \\cdot 2 = -2\\sin(2x)\\)."
    },
    {
      question: "Find the integral \\(\\int 5x^4 dx\\).",
      answer: "\\(x^5 + C\\)",
      choices: [
        "\\(x^5 + C\\)",
        "\\(5x^5 + C\\)",
        "\\(\\frac{5x^5}{5} + C\\)",
        "\\(\\frac{5x^5}{4} + C\\)"
      ],
      answerIndex: 0,
      explanation: "Use the power rule for integration: \\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\), so \\(\\int 5x^4 dx = x^5 + C\\)."
    },
    {
      question: "Evaluate \\(\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{x^2}\\).",
      answer: "\\(3\\)",
      choices: [
        "\\(3\\)",
        "\\(2\\)",
        "\\(0\\)",
        "\\(\\infty\\)"
      ],
      answerIndex: 0,
      explanation: "Divide the numerator and denominator by \\(x^2\\): \\(\\frac{3x^2 + 2x}{x^2} = 3 + \\frac{2}{x}\\). As \\(x\\) approaches infinity, \\(\\frac{2}{x}\\) approaches 0, leaving \\(3\\)."
    },
    {
      question: "Find the critical points of \\(f(x) = x^4 - 4x^3 + 6x^2\\).",
      answer: "\\(x = 0\\) and \\(x = 2\\)",
      choices: [
        "\\(x = 0\\) and \\(x = 2\\)",
        "\\(x = 1\\) and \\(x = 2\\)",
        "\\(x = -1\\) and \\(x = 3\\)",
        "\\(x = 1\\) and \\(x = 3\\)"
      ],
      answerIndex: 0,
      explanation: "Find the derivative: \\(f'(x) = 4x^3 - 12x^2 + 12x\\). Set it to zero and factor: \\(4x(x^2 - 3x + 3) = 0\\), so \\(x = 0\\) and \\(x = 2\\)."
    },
    {
      question: "Differentiate \\(f(x) = \\sqrt{x}\\).",
      answer: "\\(f'(x) = \\frac{1}{2\\sqrt{x}}\\)",
      choices: [
        "\\(f'(x) = \\frac{1}{2\\sqrt{x}}\\)",
        "\\(f'(x) = 2\\sqrt{x}\\)",
        "\\(f'(x) = \\sqrt{x}\\)",
        "\\(f'(x) = \\frac{1}{\\sqrt{x}}\\)"
      ],
      answerIndex: 0,
      explanation: "Rewrite as \\(x^{1/2}\\) and use the power rule: \\(\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\\)."
    },
    {
      question: "Evaluate \\(\\int \\frac{1}{x} dx\\).",
      answer: "\\(\\ln|x| + C\\)",
      choices: [
        "\\(\\ln|x| + C\\)",
        "\\(\\frac{1}{x} + C\\)",
        "\\(\\ln(x) + C\\)",
        "\\(\\frac{x}{2} + C\\)"
      ],
      answerIndex: 0,
      explanation: "The integral of \\(\\frac{1}{x}\\) with respect to \\(x\\) is \\(\\ln|x| + C\\)."
    },
    {
      question: "Find the limit \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x}\\).",
      answer: "\\(1\\)",
      choices: [
        "\\(1\\)",
        "\\(0\\)",
        "\\(e\\)",
        "\\(-1\\)"
      ],
      answerIndex: 0,
      explanation: "This is a standard limit in calculus: \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1\\)."
    },
    {
      question: "Find the derivative of \\(f(x) = \\ln(x^2)\\).",
      answer: "\\(f'(x) = \\frac{2}{x}\\)",
      choices: [
        "\\(f'(x) = \\frac{2}{x}\\)",
        "\\(f'(x) = \\frac{1}{x}\\)",
        "\\(f'(x) = \\frac{1}{2x}\\)",
        "\\(f'(x) = \\frac{1}{x^2}\\)"
      ],
      answerIndex: 0,
      explanation: "Use the chain rule: \\(f'(x) = \\frac{d}{dx}[2\\ln(x)] = \\frac{2}{x}\\)."
    },
    {
      question: "Find the maximum value of \\(f(x) = 3x^2 - 12x + 7\\).",
      answer: "\\(7\\)",
      choices: [
        "\\(7\\)",
        "\\(3\\)",
        "\\(-1\\)",
        "\\(5\\)"
      ],
      answerIndex: 0,
      explanation: "Since this is an upward-facing parabola, the minimum value occurs at the vertex. The vertex of \\(f(x) = ax^2 + bx + c\\) is at \\(x = -\\frac{b}{2a}\\). For \\(f(x) = 3x^2 - 12x + 7\\), \\(x = 2\\). Substituting into \\(f(x)\\) gives \\(f(2) = 7\\)."
    }
  ];
  