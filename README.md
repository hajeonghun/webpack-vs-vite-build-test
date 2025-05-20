`Webpack 5`와 `Vite`의 프로덕션 빌드 속도를 컴포넌트 5000개 기준 **7회씩 측정한 결과**로 정리한 비교표입니다.  

---

## 🚀 빌드 성능 비교: Webpack vs Vite

| 회차 | **Webpack** (`Done in`) | **Vite** (`Done in`) |
| -- | ----------------------- | -------------------- |
| 1  | 7.08s                   | 2.12s                |
| 2  | 6.70s                   | 2.17s                |
| 3  | 6.66s                   | 2.32s                |
| 4  | 6.81s                   | 2.10s                |
| 5  | 6.74s                   | 2.07s                |
| 6  | 6.84s                   | 2.10s                |
| 7  | 6.80s                   | 2.17s                |

---

## 📊 평균 빌드 시간

| 항목     | Webpack 5 | Vite      |
| ------ | --------- | --------- |
| **평균** | **6.80초** | **2.15초** |
| **최저** | 6.66초     | 2.07초     |
| **최고** | 7.08초     | 2.32초     |

---

## 🧠 요약

* Vite는 Webpack보다 **약 3배 빠른 빌드 속도**를 보여줌
* Webpack은 평균 6.8초, Vite는 평균 2.15초 소요
* Vite는 `esbuild + Rollup` 기반의 빌드 아키텍처 덕분에 빠른 결과를 제공함
* Webpack은 유연성은 높지만 속도 측면에서 무거움

---

## Build 로그

### Webpack5  

webpack 5.99.8 compiled with 3 warnings in 6205 ms
✨  Done in 7.08s.

webpack 5.99.8 compiled with 3 warnings in 6045 ms
✨  Done in 6.70s.

webpack 5.99.8 compiled with 3 warnings in 6072 ms
✨  Done in 6.66s.

webpack 5.99.8 compiled with 3 warnings in 6141 ms
✨  Done in 6.81s.

webpack 5.99.8 compiled with 3 warnings in 6061 ms
✨  Done in 6.74s.

webpack 5.99.8 compiled with 3 warnings in 6253 ms
✨  Done in 6.84s.

webpack 5.99.8 compiled with 3 warnings in 6180 ms
✨  Done in 6.80s.

--- 

### Vite

✓ built in 1.82s
✨  Done in 2.12s.

✓ built in 1.82s
✨  Done in 2.17s.

✓ built in 2.05s
✨  Done in 2.32s.

✓ built in 1.86s
✨  Done in 2.10s.

✓ built in 1.81s
✨  Done in 2.07s.

✓ built in 1.84s
✨  Done in 2.10s.

✓ built in 1.93s
✨  Done in 2.17s.
