import Vue, { Component, WatchOptions } from 'vue';
import { createDecorator } from 'vue-class-component';
import { VueClass } from 'vue-class-component/lib/declarations';

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str: string) => str.replace(hyphenateRE, '-$1').toLowerCase();


export function CssStyle(refKey?: string) {
  return createDecorator((options, key) => {
      options.computed = options.computed || {};
      options.computed[refKey || key] = {
        cache: false,
        get(this: Vue) {
            // @ts-ignore
          return this.$refs[refKey || key].style;
        },
      };
    });
}

export function ReLoad() {
  return createDecorator((options, k) => {
    options.computed = options.computed || {};
    options.computed[k] = {
      cache: false,
      set(value) {
        // this.$vnode.key = value
      },
      get(this: Vue) {
        return this.$vnode.key;
      }
    };
  });
}

export function Super(component: any) {
  return createDecorator((options, k) => {
    options.computed = options.computed || {};
    options.computed[k] = {
      cache: false,
      get(this: Vue) {
          return new component();
      },
    };
  });
}


export function test() {
  return (target: Vue, key: string) => {
    console.log(target);
    // // @ts-ignore
    // let value = target[key];
    // const getter = () => {
    //   return value;
    // };
    // const setter = (style: string) => {
    //   // // @ts-ignore
    //   // const styleScoped = style.replace(/{./gi, '[' + 'ttt  ' + '] {' );
    //   // console.log(styleScoped);
    //   // const newComponent = {
    //   //   // @ts-ignore
    //   //   render(createElement: any) {
    //   //     return createElement('style',
    //   //           { attrs: { type: 'text/css', lang: 'css' } },
    //   //           // @ts-ignore
    //   //           [this.$slots.default || styleScoped] );
    //   //   }
    //   // };
    //   value = style;
    //   // console.log('setter', value);
    // };

    // Object.defineProperty(target, key, {
    //   set: setter,
    //   get: getter
    // });
    createDecorator((options, k) => {
      options.computed = options.computed || {};
      console.log(options.computed);
      // @ts-ignore
      options.components = options.components || {};
      // options.components[key] = newComponent;
    })(target, key);
  } ;
}


export function Style() {
  return (target: Vue, key: string, descriptor: PropertyDescriptor) => {
    const style = descriptor.value();
    createDecorator((options, k) => {
      const newComponent = {
        // @ts-ignore
        render(createElement: any) {
            // @ts-ignore
          const styleScoped = style.replace(/{./gi, '[' + options._scopeId + '] {');
          return createElement('style',
                { attrs: { type: 'text/css', lang: 'css'} },
                // @ts-ignore
                [this.$slots.default || styleScoped ]);
        }
      };
      options.components = options.components || {};
      options.components[key] = newComponent;
    })(target, key);
  };
}

export function NextTick() {
  return (target: Vue, key: string, descriptor: any) => {
      const method = descriptor.value;
      descriptor.value = () => {
          Vue.nextTick(() => {
              method();
          });
      };
      const returnValue: any = descriptor.value;
      return descriptor.value();
  };
}

export function Render(componentName?: string) {
  return (target: Vue, key: string, descriptor: PropertyDescriptor) => {
      const method = descriptor.value;
      const compiledTemplate = Vue.compile(method());
      const execParameta = /(?=\(([^)]*)\))(?=[^,]+)/g;
      const paramArray = execParameta.exec(method);
      const parameta = paramArray !== null ? paramArray[1].replace(/\s*/g, '') : ''; // remove space
      const props = parameta.split(',');
      const newComponent = {
          props,
          functional: true,
          render(createElement: any) {
              return compiledTemplate.render.call(this, createElement);
          }
      };
      createDecorator((options, k) => {
          options.components = options.components || {};
          options.components[componentName || key] = newComponent;
      })(target, key);
  };
}

export function ScopedId(key?: string) {
  return createDecorator((options, k) => {
      options.computed = options.computed || {};
      options.computed[k] = {
          cache: false,
          get(this: Vue) {
              // @ts-ignore
              return this.$options._scopeId;
          },
      };
  });
}


export function LocalStorage(key?: string) {
  return createDecorator((options, k) => {
      options.computed = options.computed || {};
      options.computed[k] = {
        cache: false,
        set(value) {
          localStorage.setItem(key || k, value);
        },
        get() {
          return localStorage.getItem(key || k);
        },
      };
    });
}
