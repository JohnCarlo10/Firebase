<template>
  <div class="custom-item">
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 50%;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .custom-item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .icon-container {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    width: 50px;
    height: 50px;
  }

  .icon-container:before,
  .icon-container:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    height: 50%;
  }

  .icon-container:before {
    top: 0;
  }

  .icon-container:after {
    bottom: 0;
  }

  .details {
    margin-left: 50px;
  }
}
</style>
