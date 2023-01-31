declare module Utils {
  type ElementType<T extends readonly unknown[]> = T[number];
}
