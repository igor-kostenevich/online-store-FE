import { ref, computed } from 'vue'

export function useTimer() {
  const now = ref(Date.now())

  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)

  const targetDate = computed(() => {
    return Date.now() + (days.value * 24 * 60 * 60 + hours.value * 60 * 60 + minutes.value * 60 + seconds.value) * 1000
  })

  const diff = computed(() => targetDate.value - now.value)

  const leftDays = computed(() => Math.max(Math.floor(diff.value / (1000 * 60 * 60 * 24)), 0))
  const leftHours = computed(() => Math.max(Math.floor((diff.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0))
  const leftMinutes = computed(() => Math.max(Math.floor((diff.value % (1000 * 60 * 60)) / (1000 * 60)), 0))
  const leftSeconds = computed(() => Math.max(Math.floor((diff.value % (1000 * 60)) / 1000), 0))

  function setTime(d: number, h: number, m: number, s: number) {
    days.value = d
    hours.value = h
    minutes.value = m
    seconds.value = s
    now.value = Date.now()
  }

  function tick() {
    now.value = Date.now()
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    leftDays,
    leftHours,
    leftMinutes,
    leftSeconds,
    setTime,
    tick,
  }
}
