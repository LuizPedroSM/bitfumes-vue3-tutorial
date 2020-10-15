import { onMounted, onUnmounted,  } from "vue";
export default function useWindowEvent(event, HandleEvent) {
    onMounted(() => window.addEventListener(event, HandleEvent));

    onUnmounted(() => window.removeEventListener(event, HandleEvent));
}