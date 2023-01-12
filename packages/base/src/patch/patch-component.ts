export function patchComponent<Props>(
  baseComponent: React.FC<Props> & { override?: React.FC<Props> },
  newComponent: React.FC<Props>
): void {
  Object.assign(baseComponent, { override: newComponent });
}
