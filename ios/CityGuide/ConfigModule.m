//
//  ConfigModule.m
//  CityGuide
//
//  Created by Bartosz Selwesiuk on 27/10/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ConfigModule.h"

@implementation ConfigModule

RCT_EXPORT_MODULE();

+(BOOL)requiresMainQueueSetup {
  return NO;
}

- (NSDictionary *)constantsToExport
  {
    NSString* appName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
    NSString* baseAddress = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"app_base_address"];
    NSString* apiModifier = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"api_modifier"];
    NSNumber* isDebug = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"is_debug"];
    return @{
             @"APP_NAME": [NSString stringWithFormat:@"%@ %@", appName, apiModifier],
             @"APP_BASE": baseAddress,
             @"IS_DEBUG": isDebug
             };
  }

@end

