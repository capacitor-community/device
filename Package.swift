// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityDevice",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorCommunityDevice",
            targets: ["DevicePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "DevicePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/DevicePlugin"),
        .testTarget(
            name: "DevicePluginTests",
            dependencies: ["DevicePlugin"],
            path: "ios/Tests/DevicePluginTests")
    ]
)