function isServer() {
  return !(process as any).browser;
}

export { isServer };
