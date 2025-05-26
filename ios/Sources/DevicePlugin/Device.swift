import Foundation

@objc public class Device: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
