if (Platform.isLoaded('rftoolsbase')) {
ServerEvents.recipes(event => {
    if (isExpertMode) {
        event.shaped('rftoolsbase:machine_frame', [
            'BPB',
            'FCF',
            'BPB'
        ], {
            C: 'industrialforegoing:machine_frame_pity',
            P: '#poly:plastics',
            F: '#poly:energized_metal',
            B: '#forge:plates/steel'
        }).id("rftoolsbase:machine_frame")
    }
})
}