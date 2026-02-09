import Foundation

@objc public class CommunityDevice: NSObject {
    /**
     * Get free disk space
     */
    public func getFreeDiskSize() -> Int64? {
        let paths = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)
        guard let lastPath = paths.last else { return nil }
        if let dictionary = try? FileManager.default.attributesOfFileSystem(forPath: lastPath) {
            if let freeSize = dictionary[FileAttributeKey.systemFreeSize] as? NSNumber {
                return freeSize.int64Value
            }
        }
        return nil
    }

    /**
     * Get real free disk space
     */
    public func getRealFreeDiskSize() -> Int64? {
        do {
            let homeURL = URL(fileURLWithPath: NSHomeDirectory())
            let values = try homeURL.resourceValues(forKeys: [.volumeAvailableCapacityForImportantUsageKey])
            if let available = values.volumeAvailableCapacityForImportantUsage {
                return available
            } else {
                return nil
            }
        } catch {
            return nil
        }
    }

    /**
     * Get total disk size
     */
    public func getTotalDiskSize() -> Int64? {
        let paths = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)
        guard let lastPath = paths.last else { return nil }
        if let dictionary = try? FileManager.default.attributesOfFileSystem(forPath: lastPath) {
            if let freeSize = dictionary[FileAttributeKey.systemSize] as? NSNumber {
                return freeSize.int64Value
            }
        }
        return nil
    }
}
