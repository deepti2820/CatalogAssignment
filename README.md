## solution
Steps to code : 1-DecodeValue: This method takes a base and a string value, then converts that value from its base to base 10 using Java's BigInteger class.

2- Decode the Y Values: Each root is represented as:
x is the key of the object.
y value is encoded using a given base, and needs to be decoded.

3-LagrangeInterpolation: This method performs the Lagrange interpolation to calculate the constant term c (i.e., the secret). It multiplies the Lagrange basis polynomials for each point and sums them up. 

4-Main Method: Simulates input where points are given with different bases. Parses the input and decodes the values from different bases. Finally, it calls the lagrangeInterpolation function to compute and print the constant term.
