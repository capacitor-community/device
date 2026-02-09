import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CommunityDevicePlugin)
public class CommunityDevicePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CommunityDevicePlugin"
    public let jsName = "CommunityDevice"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getInfo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CommunityDevice()

    @objc func getInfo(_ call: CAPPluginCall) {

        let diskFree = implementation.getFreeDiskSize() ?? 0
        let realDiskFree = implementation.getRealFreeDiskSize() ?? 0
        let diskTotal = implementation.getTotalDiskSize() ?? 0

        call.resolve([
            "diskFree": diskFree,
            "diskTotal": diskTotal,
            "realDiskFree": realDiskFree,
            "realDiskTotal": diskTotal
        ])
    }
}
