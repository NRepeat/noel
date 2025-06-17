/*********************** Custom JS for Boost AI Search & Discovery  ************************/

window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat([
  (componentRegistry) => {
      componentRegistry.useComponentPlugin('ProductPrice', {
          name: 'Modify Product Price',
          enabled: true,
          apply: () => ({
              className: 'product-price',
              props: (props) => {
                  console.log('__BoostCustomization__ props', props)
                  
                  if (props.data && props.data.price_max === 0 && props.data.price_min === 0) {
                      props.data.display_price = 'Call for Price';
                  }
                  return props;
              },
              style: {
                  // color: 'red', // Modify styles
              },
              render(elementModel, currentRenderElement) {
                  if (currentRenderElement.props?.data?.display_price === 'Call for Price') {
                      const callUsElement = document.createElement('button');
                      callUsElement.className = 'boost-custom-price';
                      callUsElement.innerText = currentRenderElement.props.data.display_price;
                      return callUsElement;
                  }
                  return currentRenderElement;
              },
              beforeRender(element) {
                console.log('__BoostCustomization__ beforeRender element', element)
              },
              afterRender(element) {
                console.log('__BoostCustomization__ afterRender element', element)
              }
          }),
      });
  }
]);
