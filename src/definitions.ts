export interface DevicePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
