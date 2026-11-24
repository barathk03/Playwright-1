# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic.spec.js >> login
- Location: tests/basic.spec.js:616:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Search') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for getByPlaceholder('Search')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]: Location not set
          - generic [ref=e59]: Select delivery location
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e147] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e158] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e224] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e235] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books & Media" [ref=e246] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
        - link "2 Wheelers" [ref=e257] [cursor=pointer]:
          - /url: /twowheelers-at-store
    - generic [ref=e271]:
      - generic [ref=e286]:
        - link [ref=e293] [cursor=pointer]:
          - /url: /beauty-and-grooming/hair-care-and-accessory/hair-care/pr?sid=g9b%2Clcf%2Cqqm&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D399&param=764565&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=CFJ33BMWZKCU_IAD&BU=Mixed
          - img "Image" [ref=e296]
        - link [ref=e303] [cursor=pointer]:
          - /url: /j9e/abm/8qx/~cs-di9946je5u/pr?sid=j9e%2Cabm%2C8qx&collection-tab-name=NAC+SGLW&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=EC1P2CZI1UKL_IAD&BU=Mixed
          - img "Image" [ref=e306]
        - link [ref=e313] [cursor=pointer]:
          - /url: /boltt-smartphone-coming-soon-ads-at-store?param=9857649876094867049&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=352VBUG0J5JJ_AD&BU=Mixed
          - img "Image" [ref=e316]
        - link [ref=e323] [cursor=pointer]:
          - /url: /snapdragon-days-2025-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=9BHZ74RL62L8_AD&BU=Mixed
          - img "Image" [ref=e326]
        - link [ref=e333] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-2vpnnxxa45/pr?sid=g9b&collection-tab-name=Beardo+2&p%5B%5D=facets.brand%255B%255D%3DBEARDO&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=29TGVXI4ATYS_AD&BU=Mixed
          - img "Image" [ref=e336]
        - link [ref=e343] [cursor=pointer]:
          - /url: /audio-video/~cs-z1s7oj0mji/pr?sid=0pm&collection-tab-name=Mivi&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AZM67LTV6G0P_AD&BU=Mixed
          - img "Image" [ref=e346]
        - link [ref=e353] [cursor=pointer]:
          - /url: /audio-video/~cs-iobs3qd5tb/pr?sid=0pm&collection-tab-name=Mivi&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WPJOXMPOI7KI_AD&BU=Mixed
          - img "Image" [ref=e356]
      - generic [ref=e374]:
        - generic [ref=e378]:
          - img "Image" [ref=e381]
          - generic [ref=e382]: In demand
        - generic [ref=e388]:
          - link "Image Shop now Under ₹599" [ref=e393] [cursor=pointer]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&sort=popularity&p%5B%5D=facets.pattern%255B%255D%3DFloral%2BPrint&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D599&Param=5498&hpid=7_M_eVRDt3ugzor2kT6386p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk1OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhIRUhHQVJXVkFCWkJVIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiRmxvcmFsIGt1cnRhIHNldHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e403]
            - generic [ref=e406]:
              - generic [ref=e407]: Shop now
              - generic [ref=e408]: Under ₹599
          - link "Image boAt, realme, Mivi & more Min 50% Off" [ref=e413] [cursor=pointer]:
            - /url: /audio-video/pr?sid=0pm&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=w2BGimYwATZXfn_vEkn1oap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0g1WTNFOFRVV0tXR0giLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IE9mIEhlYWRwaG9uZXMgJiBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e423]
            - generic [ref=e426]:
              - generic [ref=e427]: boAt, realme, Mivi & more
              - generic [ref=e428]: Min 50% Off
          - link "Image Deal of the day From ₹99" [ref=e433] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DEDDY%2BHAGER&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DSKMEI&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DABREXO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DNAVlFORCE&p%5B%5D=facets.brand%255B%255D%3DNAVIFORCE&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DNIBOSI&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DAlix&p%5B%5D=facets.brand%255B%255D%3DKitcone&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DBruno%2BMilano&p%5B%5D=facets.brand%255B%255D%3DBENYAR&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DBenling&p%5B%5D=facets.brand%255B%255D%3DOLEVS&p%5B%5D=facets.brand%255B%255D%3DYHMEI&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&param=67878&hpid=I5DjM8Fgo4WWx8tvypbgQqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FUSEZORVlIWkZDR1VaUCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk1lbiBXYXRjaCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e443]
            - generic [ref=e446]:
              - generic [ref=e447]: Deal of the day
              - generic [ref=e448]: From ₹99
          - link "Image Cello, Milton & more From ₹99" [ref=e453] [cursor=pointer]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&hpid=rUgIA3m5TK4wZQuZBiANxqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQk9UR0ZLWEg1WUhZR1lXRyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGVyIEJvdHRsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e463]
            - generic [ref=e466]:
              - generic [ref=e467]: Cello, Milton & more
              - generic [ref=e468]: From ₹99
      - link [ref=e479] [cursor=pointer]:
        - /url: /flights-travel-uhp-at-store?param=Flights-Bookings-dontmiss&BU=Mixed
        - img "Image" [ref=e485]
      - generic [ref=e495]:
        - generic [ref=e499]:
          - img "Image" [ref=e502]
          - generic [ref=e504]:
            - generic [ref=e505]: Best Value Deals on Fashion
            - link [ref=e507] [cursor=pointer]:
              - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e514]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e519] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e529]
            - generic [ref=e532]:
              - generic [ref=e533]: Men’s Slippers & Flip Flops
              - generic [ref=e534]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e539] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e549]
            - generic [ref=e552]:
              - generic [ref=e553]: Men’s Casual Shoes
              - generic [ref=e554]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e559] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e569]
            - generic [ref=e572]:
              - generic [ref=e573]: Men’s Sports Shoes
              - generic [ref=e574]: Min. 70% Off
          - link "Image Women's Dress Materials Min. 50% Off" [ref=e579] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0864158925eedc57dc53df34a0d0662d/pr?sid=clo,qfi,xcx,ms4&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e589]
            - generic [ref=e592]:
              - generic [ref=e593]: Women's Dress Materials
              - generic [ref=e594]: Min. 50% Off
      - generic [ref=e604]:
        - generic [ref=e605]: Brands in Spotlight
        - generic [ref=e610]:
          - link [ref=e615] [cursor=pointer]:
            - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=ACCGRNFM5GBPUKPF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ADITA3A3UXE4_AD&BU=Mixed
            - img "Image" [ref=e618]
          - link [ref=e623] [cursor=pointer]:
            - /url: /g9b/~cs-wun42gzgjh/pr?sid=g9b&collection-tab-name=MINARA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=GCTE2NY1JLDU_AD&BU=Mixed
            - img "Image" [ref=e626]
          - link [ref=e631] [cursor=pointer]:
            - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=SMWH45NYXZCMCCTS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=GZXA4HN3BM6O_AD&BU=Mixed
            - img "Image" [ref=e634]
      - generic [ref=e644]:
        - generic [ref=e648]:
          - img "Image" [ref=e651]
          - generic [ref=e652]: Trends you may like
        - generic [ref=e658]:
          - link "Image Baggy" [ref=e664] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-897a62225e851ec5617e29bb34c90161/pr?sid=clo,vua,e8g,kc7&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e665]:
              - img "Image" [ref=e673]
              - generic [ref=e676]: Baggy
          - link "Image Bodycon" [ref=e685] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-a48a0419eb31a68a741abea6036fb841/pr?sid=clo,odx,maj,jhy&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e686]:
              - img "Image" [ref=e694]
              - generic [ref=e697]: Bodycon
          - link "Image Stackable" [ref=e706] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-16cc581a466daadafdfc0b3aa8710111/pr?sid=mcr&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e707]:
              - img "Image" [ref=e715]
              - generic [ref=e718]: Stackable
          - link "Image HealthyCooking" [ref=e727] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-d9c52d9ef964af9bff91e2030c9c3893/pr?sid=upp&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e728]:
              - img "Image" [ref=e736]
              - generic [ref=e739]: HealthyCooking
      - generic [ref=e752]:
        - generic [ref=e756]:
          - img "Image" [ref=e759]
          - generic [ref=e761]:
            - generic [ref=e762]: Hair & Skincare Essentials
            - link [ref=e764] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e771]:
          - link "Image Face Wash Min. 50% Off" [ref=e776] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e786]
            - generic [ref=e789]:
              - generic [ref=e790]: Face Wash
              - generic [ref=e791]: Min. 50% Off
          - link "Image Hair Oil Min. 50% Off" [ref=e796] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-121af17014a18d5ac2b75291ada07534/pr?sid=g9b,lcf,qqm,fmb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e806]
            - generic [ref=e809]:
              - generic [ref=e810]: Hair Oil
              - generic [ref=e811]: Min. 50% Off
          - link "Image Hair Claw Min. 50% Off" [ref=e816] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-597cf2cfc68d911d5f236ca0fa9b8d60/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e826]
            - generic [ref=e829]:
              - generic [ref=e830]: Hair Claw
              - generic [ref=e831]: Min. 50% Off
          - link "Image Hair Care Min. 50% Off" [ref=e836] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-ee5cddd656e84062665e04fc327fddb1/pr?sid=g9b,lcf,qqm&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e846]
            - generic [ref=e849]:
              - generic [ref=e850]: Hair Care
              - generic [ref=e851]: Min. 50% Off
      - generic [ref=e861]:
        - generic [ref=e865]:
          - img "Image" [ref=e868]
          - generic [ref=e870]:
            - generic [ref=e871]: Trending Gadgets & Appliances
            - link [ref=e873] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e880]:
          - link "Image True Wireless Min. 50% Off" [ref=e885] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e895]
            - generic [ref=e898]:
              - generic [ref=e899]: True Wireless
              - generic [ref=e900]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e905] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e915]
            - generic [ref=e918]:
              - generic [ref=e919]: Trimmers
              - generic [ref=e920]: Min. 50% Off
          - link "Image Neckband Min. 50% Off" [ref=e925] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e935]
            - generic [ref=e938]:
              - generic [ref=e939]: Neckband
              - generic [ref=e940]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e945] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e955]
            - generic [ref=e958]:
              - generic [ref=e959]: Smart Watches
              - generic [ref=e960]: Min. 40% Off
      - generic [ref=e973]:
        - link "Image For GenZ" [ref=e978] [cursor=pointer]:
          - /url: /ls-gen-z-26-at-store?param=3258257&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
          - img "Image" [ref=e981]
          - generic [ref=e982]: For GenZ
        - link "Image Flipkart Pay" [ref=e987] [cursor=pointer]:
          - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IFBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e990]
          - generic [ref=e991]: Flipkart Pay
        - link "Image Sell Phone" [ref=e996] [cursor=pointer]:
          - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
          - img "Image" [ref=e999]
          - generic [ref=e1000]: Sell Phone
        - link "Image Gift Cards" [ref=e1005] [cursor=pointer]:
          - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
          - img "Image" [ref=e1008]
          - generic [ref=e1009]: Gift Cards
        - link "Image Originals" [ref=e1014] [cursor=pointer]:
          - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e1017]
          - generic [ref=e1018]: Originals
        - link "Image Plus" [ref=e1023] [cursor=pointer]:
          - /url: /plus?param=379289&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBsdXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
          - img "Image" [ref=e1026]
          - generic [ref=e1027]: Plus
        - link "Image SuperCoin" [ref=e1032] [cursor=pointer]:
          - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e1035]
          - generic [ref=e1036]: SuperCoin
        - link "Image Next-Gen" [ref=e1041] [cursor=pointer]:
          - /url: /next-gen-brands-store?param=098124&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQtR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
          - img "Image" [ref=e1044]
          - generic [ref=e1045]: Next-Gen
      - generic [ref=e1055]:
        - generic [ref=e1059]:
          - img "Image" [ref=e1062]
          - generic [ref=e1064]:
            - generic [ref=e1065]: Home Decor & Furnishing
            - link [ref=e1067] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_2~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e1074]:
          - link "Image Torches Hand-picked" [ref=e1079] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e6cc5a97a8b213ca2592ae9e7584657c/pr?sid=jhg,yqn,db9&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1089]
            - generic [ref=e1092]:
              - generic [ref=e1093]: Torches
              - generic [ref=e1094]: Hand-picked
          - link "Image Wall Clocks Min. 50% Off" [ref=e1099] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0082a75b990faa4b37ade0f4f850e2af/pr?sid=arb,kjw,bm1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1109]
            - generic [ref=e1112]:
              - generic [ref=e1113]: Wall Clocks
              - generic [ref=e1114]: Min. 50% Off
          - link "Image Bath Towels Min. 50% Off" [ref=e1119] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-35092ba8bc92d3d4bd6a1a5e2686bc2b/pr?sid=jra,jk3,wtg&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1129]
            - generic [ref=e1132]:
              - generic [ref=e1133]: Bath Towels
              - generic [ref=e1134]: Min. 50% Off
          - link "Image Mosquito Nets Special offer" [ref=e1139] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7a2a9bad7e4968fdcb25208f9e8f6578/pr?sid=jra,knw,i6y&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1149]
            - generic [ref=e1152]:
              - generic [ref=e1153]: Mosquito Nets
              - generic [ref=e1154]: Special offer
      - generic [ref=e1156]: Hang on, loading content
      - generic [ref=e1170]:
        - generic [ref=e1171]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1172]: +
      - contentinfo [ref=e1173]:
        - generic [ref=e1175]:
          - generic [ref=e1176]:
            - generic [ref=e1177]:
              - generic [ref=e1178]: ABOUT
              - link "Contact Us" [ref=e1179] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1180] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1181] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1182] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1183] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1184] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1185]:
              - generic [ref=e1186]: GROUP COMPANIES
              - link "Myntra" [ref=e1187] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1188] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1189] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1190]:
              - generic [ref=e1191]: HELP
              - link "Payments" [ref=e1192] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1193] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1194] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1195] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1196]:
              - generic [ref=e1197]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1198] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1199] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1200] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1201] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1202] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1203] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1204] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1205] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1206]:
              - generic [ref=e1207]: "Mail Us:"
              - generic [ref=e1208]:
                - paragraph [ref=e1209]: Flipkart Internet Private Limited,
                - paragraph [ref=e1210]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1211]: Clove Embassy Tech Village,
                - paragraph [ref=e1212]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1213]: Bengaluru, 560103,
                - paragraph [ref=e1214]: Karnataka, India
              - generic [ref=e1215]: "Social:"
              - generic [ref=e1216]:
                - link "Facebook" [ref=e1218] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1219]
                - link "Twitter" [ref=e1221] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1222]
                - link "YouTube" [ref=e1224] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1225]
                - link "Instagram" [ref=e1227] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1228]
            - generic [ref=e1229]:
              - generic [ref=e1230]: "Registered Office Address:"
              - generic [ref=e1231]:
                - paragraph [ref=e1232]: Flipkart Internet Private Limited,
                - paragraph [ref=e1233]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1234]: Clove Embassy Tech Village,
                - paragraph [ref=e1235]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1236]: Bengaluru, 560103,
                - paragraph [ref=e1237]: Karnataka, India
                - paragraph [ref=e1238]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1239]:
                  - text: "Telephone:"
                  - link "044-45614709" [ref=e1240] [cursor=pointer]:
                    - /url: tel:044-45614709
                  - text: /
                  - link "044-45714709" [ref=e1241] [cursor=pointer]:
                    - /url: tel:044-45714709
          - generic [ref=e1242]:
            - generic [ref=e1243]:
              - img "Become a Seller" [ref=e1244]
              - link "Become a Seller" [ref=e1245] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1246]:
              - img "Advertise" [ref=e1247]
              - generic "Advertise" [ref=e1248]
            - generic [ref=e1249]:
              - img "Gift Cards" [ref=e1250]
              - link "Gift Cards" [ref=e1251] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1252]:
              - img "Help Center" [ref=e1253]
              - link "Help Center" [ref=e1254] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1255]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1257]:
    - button "✕" [ref=e1258] [cursor=pointer]
    - generic [ref=e1260]:
      - generic [ref=e1261]:
        - text: Login
        - paragraph [ref=e1262]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1265]:
        - generic [ref=e1266]:
          - textbox [active] [ref=e1267]
          - generic: Enter Email/Mobile number
        - generic [ref=e1268]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1269] [cursor=pointer]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1270] [cursor=pointer]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1272] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1274] [cursor=pointer]:
          - /url: /account/login?signup=true
```

# Test source

```ts
  518 | 
  519 | // test.only("only2",async({page})=>{
  520 | //     console.log("this is test 2");
  521 | // })
  522 | 
  523 | // test("fixme",async({page})=>{
  524 | //     console.log("this is test 3");
  525 | //     test.fixme()
  526 | //     console.log("this is test 4");
  527 | // })
  528 | 
  529 | // test("fail",async({page})=>{
  530 | //     test.fail()//this case need to fail
  531 | //     console.log("this is fail test");
  532 | //     expect(3).toBe(1)
  533 | //     await page.waitForTimeout(3000)
  534 | // })
  535 | // ------------------------------
  536 | // day 12 4/8/2026
  537 | // file uploads/ single file and multiple file 
  538 | // import{test,except}from "@playwright/test"
  539 | // test("single file",async({page})=>{
  540 | //     await page.goto('https://testautomationpractice.blogspot.com/')
  541 | //     await page.locator("#singleFileInput").click()
  542 | //     await page.locator("#singleFileInput").setInputFiles()
  543 | //     await page.waitForTimeout(3000)
  544 | // })
  545 | // test("multiple file",async({page})=>{
  546 | //     await page.goto("https://testautomationpractice.blogspot.com/")
  547 | //     await page.locator("#multipleFilesInput").click()
  548 | //     await page.locator("#multipleFilesInput").setInputFiles([])//array method by[]
  549 | //     await page.waitForTimeout(3000)
  550 | //     except(await page.locator()).tohavetext()//1st file
  551 | //     except(await page.locator()).tohavetext()//2nd file
  552 | 
  553 | // }) doubtttttttttttttttt
  554 | 
  555 | // ----------qq-------------------------
  556 | 
  557 | // day 13 5/8/2026
  558 | // habdle multiple pages/windows
  559 | // import{test,except, chromium, expect}from "@playwright/test"
  560 | // test('handle multiple pages,windows',async({})=>{
  561 | //     const browser= await chromium.launch({headless:false})
  562 | //     const context= await browser.newContext()
  563 | //     //first tab
  564 | //     const page1=await context.newPage()
  565 | 
  566 | //     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  567 | //     await expect(page1).toHaveTitle('OrangeHRM')//extra step for expect
  568 | 
  569 | //     //opening new tab by context method
  570 | //     const pagepromise= context.waitForEvent('page')
  571 | 
  572 | //     await page1.locator('//p[@class="oxd-text oxd-text--p orangehrm-copyright"][2]/a').click()
  573 | 
  574 | //     //opening
  575 | //     const newPage = await pagepromise
  576 | //     await newPage.waitForLoadState()
  577 | 
  578 | //     await except(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
  579 | 
  580 | // await page1.waitForTimeout(3000)
  581 | 
  582 | //     //close the second tab 1 method
  583 | //     await newPage.close()
  584 | //     //switch back to first tab 2nd method
  585 | //     await page1.bringToFront()
  586 | // })
  587 | 
  588 | // import{test,except}from "@playwright/test"
  589 | // import { type } from "node:os"
  590 | // test('inbuild',async({page})=>{
  591 | //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  592 | 
  593 | //     //locating the image with the help of image text
  594 | //     await page.locator('//img[@alt="company-branding"]')
  595 | // //    await page.getByAltText("company-branding")//to be visible not appearing
  596 | 
  597 | //    const logo =await page.getByAltText("company-branding")
  598 | // //    await except(logo)//to be visible not appearing
  599 | 
  600 | //    await page.getByPlaceholder("Username").fill("Admin")
  601 | //    await page.getByPlaceholder("Password").fill("admin123")
  602 | 
  603 | //    await page.getByRole("button",{type:"Submit"}).click()
  604 | 
  605 |    
  606 | // })
  607 | 
  608 | // --------------------------------
  609 | // day 14 6/8/2026
  610 | // page object module
  611 | // loginpage
  612 | // homescreen
  613 | // cart
  614 | 
  615 | import{test,expect}from "@playwright/test"
  616 | test("login",async({page})=>{
  617 |     await page.goto("https://www.flipkart.com/")
> 618 |     await page.getByPlaceholder('Search').fill('car');
      |                                           ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Search') resolved to 2 elements:
  619 | await page.getByPlaceholder('Search').press('Enter');
  620 | })
  621 | 
  622 | 
  623 | 
  624 | 
  625 | 
  626 | 
```