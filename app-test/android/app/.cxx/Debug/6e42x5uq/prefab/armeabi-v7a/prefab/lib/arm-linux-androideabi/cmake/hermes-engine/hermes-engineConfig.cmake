if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/dougl/.gradle/caches/transforms-3/473520e216346a71ed6dae1415d6c98b/transformed/jetified-hermes-android-0.73.6-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/dougl/.gradle/caches/transforms-3/473520e216346a71ed6dae1415d6c98b/transformed/jetified-hermes-android-0.73.6-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

