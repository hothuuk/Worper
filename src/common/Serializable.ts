export class Serializable {
  toJSON() {
    return Object.entries(this).reduce((acc, [key, value]) => {
      if (typeof value !== 'function' && value) {
        acc[key] = value;
      }

      return acc;
    }, {} as Record<string, any>);
  }
}