function Gunner(creature, level) {
  this.creature = creature;
  this.level = level;
  this.attacking = false;
}

setter(Gunner,'level');

Gunner.prototype.attack = function() {
  // sprawdzmy czy mamy cel
  if (this.creature.commander.target && !this.attacking) {
    if (this.creature.driver.state === 'freeze') {
      return;
    }
    if ( (this.creature instanceof Soldier) && (this.creature.commander.target.friendly)) {
      this.creature.commander.target = null;
      return;
    }
    // sprawdzamy czy atak sie udal
    // attack < Mechanics.enums.FAILURE
    var attack = this.creature.level.attack(this.creature.commander.target, this.creature);
    // atak sie powiodl
    if (attack < Mechanics.enums.FAILURE) {
      this.attacking = true;
      this.creature.driver.stop();
      // ustawiamy kreature animacje na atak
      this.creature.on_attack(this.creature.commander.target);
      // this.creature.on_attacked(this.creature);
      
      // zabilismy
      if (this.creature.commander.target.life <= 0) {
        this.attacking = false;
        this.creature.commander.on_kill();
      }
    } else if (attack < Mechanics.enums.CRITICAL_FAILURE) {
      this.attacking = true;
      this.creature.driver.stop();
      this.creature.on_attack(this.creature.commander.target);
    } else if (attack === Mechanics.enums.NOT_IN_RANGE) {
      this.creature.commander.on_not_in_range();
    }
  }
};

