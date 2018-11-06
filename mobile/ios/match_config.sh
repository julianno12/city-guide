set -eo pipefail

INPUT_PLIST="debug_config.plist"
if [[ "$DEPLOY_ENV" == "test" ]]; then
    INPUT_PLIST="test_config.plist"
elif [[ "$DEPLOY_ENV" == "production" ]]; then
    INPUT_PLIST="production_config.plist"
fi

INPUT_PLIST="$SRCROOT/CityGuide/$INPUT_PLIST"

copy_prop() {
    dst_var=$2
    if [[ -z $dst_var ]]; then
        dst_var=$1
    fi

    src_data=$(/usr/libexec/PlistBuddy -c "Print :$1" "$INPUT_PLIST")
    /usr/libexec/PlistBuddy -c "Set $dst_var $3$src_data" "$INFOPLIST_FILE"
}

prepare_url_schemes() {
    /usr/libexec/PlistBuddy -c "Delete :CFBundleURLTypes:0:CFBundleURLSchemes" "$INFOPLIST_FILE"
    /usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0:CFBundleURLSchemes array" "$INFOPLIST_FILE"
}

copy_url_schemes() {
    src_data=$(/usr/libexec/PlistBuddy -c "Print :$1" "$INPUT_PLIST")
    /usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0:CFBundleURLSchemes:0 string $3$src_data" "$INFOPLIST_FILE"
}

copy_prop "app_base_address"
copy_prop "api_modifier"
copy_prop "is_debug"
