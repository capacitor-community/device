export interface CommunityDeviceInfo {
  /**
   * How much free disk space is available on the normal data storage
   * path for the os, in bytes.
   *
   * On Android it returns the free disk space on the "system"
   * partition holding the core Android OS.
   * On iOS this value is not accurate.
   *
   * @deprecated Use `realDiskFree`.
   * @since 7.0.0
   */
  diskFree?: number;

  /**
   * The total size of the normal data storage path for the OS, in bytes.
   *
   * On Android it returns the disk space on the "system"
   * partition holding the core Android OS.
   *
   * @deprecated Use `realDiskTotal`.
   * @since 7.0.0
   */
  diskTotal?: number;

  /**
   * How much free disk space is available on the normal data storage, in bytes.
   *
   * @since 7.0.0
   */
  realDiskFree?: number;

  /**
   * The total size of the normal data storage path, in bytes.
   *
   * @since 7.0.0
   */
  realDiskTotal?: number;
}

export interface CommunityDevicePlugin {
  /**
   * Return information about the underlying device/os/platform.
   *
   * @since 7.0.0
   */
  getInfo(): Promise<CommunityDeviceInfo>;
}
