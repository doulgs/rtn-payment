if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/dougl/.gradle/caches/transforms-3/dc4c30aa761c9fd935a586b1fbfa48e8/transformed/jetified-hermes-android-0.73.6-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/dougl/.gradle/caches/transforms-3/dc4c30aa761c9fd935a586b1fbfa48e8/transformed/jetified-hermes-android-0.73.6-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

