#import "Orientation.h" // <--- import 
@implementation AppDelegate 
 
  // ... 
 
  - (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
    while ([[UIDevice currentDevice] isGeneratingDeviceOrientationNotifications]) {
        [[UIDevice currentDevice] endGeneratingDeviceOrientationNotifications];
    }
  
    return [Orientation getOrientation];
  }
 
@end