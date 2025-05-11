// UnoCSS配置和类型导入
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * UnoCSS配置
 * 基于中国传统色彩系统和现代组件设计
 * 优化规则组织、动画系统整合及性能策略
 */
export default defineConfig({
  /**
   * ===== 预设配置 =====
   * 整合多个预设以提供完整的功能集
   */
  presets: [
    // Wind3预设 - 提供流行的实用程序优先框架的超集
    // 包括Tailwind CSS, Windi CSS, Bootstrap, Tachyons等
    presetWind3(),

    // 属性化模式 - 支持以HTML属性形式编写样式
    // 例如: <div bg="blue-500" text="sm white"></div>
    presetAttributify(),

    /**
     * 图标预设 - 提供纯CSS图标支持
     * 支持Icones或Iconify作为图标源
     * @link https://www.npmjs.com/search?q=%40iconify-json
     */
    presetIcons({
      scale: 1.2, // 图标缩放比例
      warn: true, // 启用警告以便调试
      // prefix: 'i-', // 设置自定义前缀
      // 将图标默认设置为内联
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),

    // Web字体预设 - 集成Google字体
    presetWebFonts({
      provider: 'google',
      fonts: {
        // 正文字体
        'inter': [{ name: 'Inter', weights: ['400', '500', '600', '700'] },
        ],
        // 代码字体
        'fira-code': [{ name: 'Fira Code', weights: ['400', '500', '700'] },
        ],
      },
    }),
  ],
  /**
   * ===== 转换器配置 =====
   * 处理特殊语法和简化写法
   */
  transformers: [
    // 指令转换器 - 处理@apply等指令
    // 例如: .foo { @apply text-center font-bold; }
    transformerDirectives(),
    // 变体组转换器 - 处理组合写法
    // 例如: hover:(bg-red text-white)
    transformerVariantGroup(),
  ],

  /**
   * ===== 变体配置 =====
   * 定义生成类名变体的规则
   */
  variants: [
    // 增强的暗色模式变体支持
    (matcher) => {
      if (!matcher.startsWith('dark:'))
        return matcher
      return {
        matcher: matcher.slice(5),
        selector: s => `.dark ${s}`,
      }
    },
  ],

  /**
   * ===== 性能优化配置 =====
   */
  // 阻止列表 - 阻止特定类名生成
  blocklist: [],
  // 高效动态规则 - 新版本语法
  rules: [
    // 同时支持多种颜色透明度属性
    [/^(bg|text|border)-([a-z0-9_-]+)\/(\d{1,3})$/, ([, prop, color, opacity]) => {
      const mapping = {
        bg: 'background-color',
        text: 'color',
        border: 'border-color',
      }
      return { [mapping[prop]]: `rgba(var(--${color}-rgb), ${Number(opacity) / 100})` }
    }],
  ],

  /**
   * ===== 快捷方式配置 =====
   * 一个属性对应多个UnoCSS类值
   * 示例：<div class="flex-center card-glass">...</div>
   * @link https://unocss.dev/config/shortcuts
   */
  shortcuts: [
    // 1. 布局快捷方式对象 - 提升可维护性
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'grid-center': 'grid place-items-center',
      'absolute-center': 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      'container-base': 'p-4 space-y-4 rounded-lg',
    },
  ],
  /**
   * UnoCSS安全列表机制
   * 注意: 为了性能考虑，safelist不应过多，过多条目会增加CSS文件大小
   * 使用函数式生成代替手动枚举，减少代码量同时提高可维护性
   * @link https://unocss.dev/config/safelist
   */
  safelist: (() => {

  })(),
  /**
   * ===== 主题配置 =====
   */
  theme: {

    fontFamily: {
      'inter': 'Inter, system-ui, sans-serif',
      'fira-code': '"Fira Code", monospace', // 保留引号因为名称含有连字符
    },
  },

  // 全局样式预设
  preflights: [
    {
      layer: 'base',
      getCSS: ({ theme }) => `
        body {
          font-family: ${theme.fontFamily?.inter};
        }
        /* 代码元素 */
        code,kbd,samp,pre {
          font-family: ${theme.fontFamily?.['fira-code']};
        }
        /* 其他基础样式已移到 reset.css */
      `,
    },
  ],
})
