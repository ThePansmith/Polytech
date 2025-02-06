ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.replaceInput({ id: 'industrialforegoingsouls:soul_laser_base' }, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_advanced')
    }
})