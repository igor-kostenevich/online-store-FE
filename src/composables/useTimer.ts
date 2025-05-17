import { ref, computed } from 'vue'

export function useTimer() {
  const now = ref(Date.now())
  const targetTimestamp = ref(0)

  const diff = computed(() => targetTimestamp.value - now.value)

  const leftDays = computed(() => Math.max(Math.floor(diff.value / (1000 * 60 * 60 * 24)), 0))
  const leftHours = computed(() => Math.max(Math.floor((diff.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0))
  const leftMinutes = computed(() => Math.max(Math.floor((diff.value % (1000 * 60 * 60)) / (1000 * 60)), 0))
  const leftSeconds = computed(() => Math.max(Math.floor((diff.value % (1000 * 60)) / 1000), 0))

  const isFinished = computed(() => diff.value <= 0)

  function setTargetDate(expiresAtIsoString: string) {
    const parsedTime = Date.parse(expiresAtIsoString)
    targetTimestamp.value = isNaN(parsedTime) ? Date.now() : parsedTime
    now.value = Date.now()
  }

  function tick() {
    now.value = Date.now()
  }

  return {
    leftDays,
    leftHours,
    leftMinutes,
    leftSeconds,
    isFinished,
    setTargetDate,
    tick,
  }
}
