let BASE_URL = '';

console.log('NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000/_assets/stock-plans'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://2012.thelogconnection.com/test/_assets/stock-plans';
} 

export const homePlans = [
  {
    planName: "Adirondac",
    planSize: "2330 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Adirondac/banner/Adirondac.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Adirondac/floorplans/Adirondac_f1.gif`,
      imagePlanF2: `${BASE_URL}/Adirondac/floorplans/Adirondac_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Adirondac/banner/Adirondac.jpg`,
          original: `${BASE_URL}/Adirondac/banner/Adirondac.jpg`,
          embedUrl: 'https://www.youtube.com/embed/cpacfOoz9WA',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Adirondac/gallery/`,
          originalBaseUrl: `${BASE_URL}/Adirondac/gallery/`,
          count: 11
        }
    }
  },
  {
    planName: "Algonquin",
    planSize: "1997 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Algonquin/banner/Algonquin.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Algonquin/floorplans/Algonquin_f1.gif`,
      imagePlanF2: `${BASE_URL}/Algonquin/floorplans/Algonquin_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Algonquin/banner/Algonquin.jpg`,
          original: `${BASE_URL}/Algonquin/banner/Algonquin.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Algonquin/gallery/`,
          originalBaseUrl: `${BASE_URL}/Algonquin/gallery/`,
          count: 15
        }
    }
  },
  // {
  //   planName: "Algonquin",
  //   planSize: "2750 SQ. FT.",
  //   image: require("../assets/images/stock-plans/original/Algonquin.jpg"),
  //   imagePlanF1: require("../assets/images/stock-plans/plans/Algonquin_f1.gif"),
  //   imagePlanF2: require("../assets/images/stock-plans/plans/Algonquin_f2.gif"),
  //   categoryCd: 'StackedLogHomes'
  // },
  {
    planName: "Alpine",
    planSize: "1410 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Alpine/banner/Alpine.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Alpine/floorplans/Alpine_f1.gif`,
      imagePlanF2: `${BASE_URL}/Alpine/floorplans/Alpine_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Alpine/banner/Alpine.jpg`,
          original: `${BASE_URL}/Alpine/banner/Alpine.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Alpine/gallery/`,
          originalBaseUrl: `${BASE_URL}/Alpine/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Ambrosio",
    planSize: "2076 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Ambrosio/banner/Ambrosio.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Ambrosio/floorplans/Ambrosio_f1.gif`,
      imagePlanF2: `${BASE_URL}/Ambrosio/floorplans/Ambrosio_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Ambrosio/banner/Ambrosio.jpg`,
          original: `${BASE_URL}/Ambrosio/banner/Ambrosio.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Ambrosio/gallery/`,
          originalBaseUrl: `${BASE_URL}/Ambrosio/gallery/`,
          count: 15
        }
    }
  },

  {
    planName: "Arlington",
    planSize: "4580 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Arlington/banner/Arlington.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Arlington/floorplans/Arlington_f1.gif`,
      imagePlanF2: `${BASE_URL}/Arlington/floorplans/Arlington_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Arlington/banner/Arlington.jpg`,
          original: `${BASE_URL}/Arlington/banner/Arlington.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Arlington/gallery/`,
          originalBaseUrl: `${BASE_URL}/Arlington/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Aspen Woods",
    planSize: "3126 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Aspen_Woods/banner/Aspen_Woods.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Aspen_Woods/floorplans/Aspen_Woods_f1.gif`,
      imagePlanF2: `${BASE_URL}/Aspen_Woods/floorplans/Aspen_Woods_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Aspen_Woods/banner/Aspen_Woods.jpg`,
          original: `${BASE_URL}/Aspen_Woods/banner/Aspen_Woods.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Aspen_Woods/gallery/`,
          originalBaseUrl: `${BASE_URL}/Aspen_Woods/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Astoria",
    planSize: "1313 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Astoria/banner/Astoria.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Astoria/floorplans/Astoria_f1.gif`,
      imagePlanF2: `${BASE_URL}/Astoria/floorplans/Astoria_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Astoria/banner/Astoria.jpg`,
          original: `${BASE_URL}/Astoria/banner/Astoria.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Astoria/gallery/`,
          originalBaseUrl: `${BASE_URL}/Astoria/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Bavarian Dream",
    planSize: "3128 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Bavarian_Dream/banner/Bavarian_Dream.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Bavarian_Dream/floorplans/Bavarian_Dream_f1.gif`,
      imagePlanF2: `${BASE_URL}/Bavarian_Dream/floorplans/Bavarian_Dream_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Bavarian_Dream/banner/Bavarian_Dream.jpg`,
          original: `${BASE_URL}/Bavarian_Dream/banner/Bavarian_Dream.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Bavarian_Dream/gallery/`,
          originalBaseUrl: `${BASE_URL}/Bavarian_Dream/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Bay View",
    planSize: "1780 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Bay_View/banner/Bay_View.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Bay_View/floorplans/Bay_View_f1.gif`,
      imagePlanF2: `${BASE_URL}/Bay_View/floorplans/Bay_View_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Bay_View/banner/Bay_View.jpg`,
          original: `${BASE_URL}/Bay_View/banner/Bay_View.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Bay_View/gallery/`,
          originalBaseUrl: `${BASE_URL}/Bay_View/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Bella Coola",
    planSize: "2011 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Bella_Coola/banner/Bella_Coola.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Bella_Coola/floorplans/Bella_Coola_f1.gif`,
      imagePlanF2: `${BASE_URL}/Bella_Coola/floorplans/Bella_Coola_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Bella_Coola/banner/Bella_Coola.jpg`,
          original: `${BASE_URL}/Bella_Coola/banner/Bella_Coola.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Bella_Coola/gallery/`,
          originalBaseUrl: `${BASE_URL}/Bella_Coola/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Birch Bay",
    planSize: "3777 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Birch_Bay/banner/Birch_Bay.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Birch_Bay/floorplans/Birch_Bay_f1.gif`,
      imagePlanF2: `${BASE_URL}/Birch_Bay/floorplans/Birch_Bay_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Birch_Bay/banner/Birch_Bay.jpg`,
          original: `${BASE_URL}/Birch_Bay/banner/Birch_Bay.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Birch_Bay/gallery/`,
          originalBaseUrl: `${BASE_URL}/Birch_Bay/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Blackstone",
    planSize: "1040 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Blackstone/banner/Blackstone.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Blackstone/floorplans/Blackstone_f1.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Blackstone/banner/Blackstone.jpg`,
          original: `${BASE_URL}/Blackstone/banner/Blackstone.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Blackstone/gallery/`,
          originalBaseUrl: `${BASE_URL}/Blackstone/gallery/`,
          count: 15
        }
    } 
  },
  {
    planName: "Blue Ridge",
    planSize: "2589 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Blue_Ridge/banner/Blue_Ridge.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Blue_Ridge/floorplans/Blue_Ridge_f0.gif`,
      imagePlanF1: `${BASE_URL}/Blue_Ridge/floorplans/Blue_Ridge_f1.gif`,
      imagePlanF2: `${BASE_URL}/Blue_Ridge/floorplans/Blue_Ridge_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Blue_Ridge/banner/Blue_Ridge.jpg`,
          original: `${BASE_URL}/Blue_Ridge/banner/Blue_Ridge.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Blue_Ridge/gallery/`,
          originalBaseUrl: `${BASE_URL}/Blue_Ridge/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Bonavista",
    planSize: "1854 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Bonavista/banner/Bonavista.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Bonavista/floorplans/Bonavista_f1.gif`,
      imagePlanF2: `${BASE_URL}/Bonavista/floorplans/Bonavista_f2.gif`,
      imagePlanF3: `${BASE_URL}/Bonavista/floorplans/Bonavista_f3.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Bonavista/banner/Bonavista.jpg`,
          original: `${BASE_URL}/Bonavista/banner/Bonavista.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Bonavista/gallery/`,
          originalBaseUrl: `${BASE_URL}/Bonavista/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Braelorne",
    planSize: "3286 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Braelorne/banner/Braelorne.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Braelorne/floorplans/Braelorne_f1.gif`,
      imagePlanF2: `${BASE_URL}/Braelorne/floorplans/Braelorne_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Braelorne/banner/Braelorne.jpg`,
          original: `${BASE_URL}/Braelorne/banner/Braelorne.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Braelorne/gallery/`,
          originalBaseUrl: `${BASE_URL}/Braelorne/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Bridgeport",
    planSize: "2011 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Bridgeport/banner/Bridgeport.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Bridgeport/floorplans/Bridgeport_f1.gif`,
      imagePlanF2: `${BASE_URL}/Bridgeport/floorplans/Bridgeport_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Bridgeport/banner/Bridgeport.jpg`,
          original: `${BASE_URL}/Bridgeport/banner/Bridgeport.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Bridgeport/gallery/`,
          originalBaseUrl: `${BASE_URL}/Bridgeport/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Canterbury",
    planSize: "1965 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Canterbury/banner/Canterbury.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Canterbury/floorplans/Canterbury_f1.gif`,
      imagePlanF2: `${BASE_URL}/Canterbury/floorplans/Canterbury_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Canterbury/banner/Canterbury.jpg`,
          original: `${BASE_URL}/Canterbury/banner/Canterbury.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Canterbury/gallery/`,
          originalBaseUrl: `${BASE_URL}/Canterbury/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Cascade",
    planSize: "2074 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Cascade/banner/Cascade.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Cascade/floorplans/Cascade_f1.gif`,
      imagePlanF2: `${BASE_URL}/Cascade/floorplans/Cascade_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Cascade/banner/Cascade.jpg`,
          original: `${BASE_URL}/Cascade/banner/Cascade.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Cascade/gallery/`,
          originalBaseUrl: `${BASE_URL}/Cascade/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Cherryville",
    planSize: "2750 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Cherryville/banner/Cherryville.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Cherryville/floorplans/Cherryville_f1.gif`,
      imagePlanF2: `${BASE_URL}/Cherryville/floorplans/Cherryville_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Cherryville/banner/Cherryville.jpg`,
          original: `${BASE_URL}/Cherryville/banner/Cherryville.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Cherryville/gallery/`,
          originalBaseUrl: `${BASE_URL}/Cherryville/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Chesapeake",
    planSize: "2419 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Chesapeake/banner/Chesapeake.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Chesapeake/floorplans/Chesapeake_f1.gif`,
      imagePlanF2: `${BASE_URL}/Chesapeake/floorplans/Chesapeake_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Chesapeake/banner/Chesapeake.jpg`,
          original: `${BASE_URL}/Chesapeake/banner/Chesapeake.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Chesapeake/gallery/`,
          originalBaseUrl: `${BASE_URL}/Chesapeake/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Chinook",
    planSize: "2370 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Chinook/banner/Chinook.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Chinook/floorplans/Chinook_f1.gif`,
      imagePlanF2: `${BASE_URL}/Chinook/floorplans/Chinook_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Chinook/banner/Chinook.jpg`,
          original: `${BASE_URL}/Chinook/banner/Chinook.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Chinook/gallery/`,
          originalBaseUrl: `${BASE_URL}/Chinook/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Coldstream",
    planSize: "1354 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Coldstream/banner/Coldstream.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Coldstream/floorplans/Coldstream_f1.gif`,
      imagePlanF2: `${BASE_URL}/Coldstream/floorplans/Coldstream_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Coldstream/banner/Coldstream.jpg`,
          original: `${BASE_URL}/Coldstream/banner/Coldstream.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Coldstream/gallery/`,
          originalBaseUrl: `${BASE_URL}/Coldstream/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Cottonwood",
    planSize: "2119 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Cottonwood/banner/Cottonwood.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Cottonwood/floorplans/Cottonwood_f1.gif`,
      imagePlanF2: `${BASE_URL}/Cottonwood/floorplans/Cottonwood_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Cottonwood/banner/Cottonwood.jpg`,
          original: `${BASE_URL}/Cottonwood/banner/Cottonwood.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Cottonwood/gallery/`,
          originalBaseUrl: `${BASE_URL}/Cottonwood/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Country Pine",
    planSize: "1264 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Country_Pine/banner/Country_Pine.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Country_Pine/floorplans/Country_Pine_f1.gif`,
      imagePlanF2: `${BASE_URL}/Country_Pine/floorplans/Country_Pine_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Country_Pine/banner/Country_Pine.jpg`,
          original: `${BASE_URL}/Country_Pine/banner/Country_Pine.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Country_Pine/gallery/`,
          originalBaseUrl: `${BASE_URL}/Country_Pine/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Creston",
    planSize: "2739 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Creston/banner/Creston.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Creston/floorplans/Creston_f1.gif`,
      imagePlanF2: `${BASE_URL}/Creston/floorplans/Creston_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Creston/banner/Creston.jpg`,
          original: `${BASE_URL}/Creston/banner/Creston.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Creston/gallery/`,
          originalBaseUrl: `${BASE_URL}/Creston/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Deerfield",
    planSize: "1896 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Deerfield/banner/Deerfield.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Deerfield/floorplans/Deerfield_f1.gif`,
      imagePlanF2: `${BASE_URL}/Deerfield/floorplans/Deerfield_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Deerfield/banner/Deerfield.jpg`,
          original: `${BASE_URL}/Deerfield/banner/Deerfield.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Deerfield/gallery/`,
          originalBaseUrl: `${BASE_URL}/Deerfield/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Eagles Nest",
    planSize: "2650 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Eagles_Nest/banner/Eagles_Nest.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Eagles_Nest/floorplans/Eagles_Nest_f1.gif`,
      imagePlanF2: `${BASE_URL}/Eagles_Nest/floorplans/Eagles_Nest_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Eagles_Nest/banner/Eagles_Nest.jpg`,
          original: `${BASE_URL}/Eagles_Nest/banner/Eagles_Nest.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Eagles_Nest/gallery/`,
          originalBaseUrl: `${BASE_URL}/Eagles_Nest/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Edgewood",
    planSize: "2242 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Edgewood/banner/Edgewood.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Edgewood/floorplans/Edgewood_f1.gif`,
      imagePlanF2: `${BASE_URL}/Edgewood/floorplans/Edgewood_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Edgewood/banner/Edgewood.jpg`,
          original: `${BASE_URL}/Edgewood/banner/Edgewood.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Edgewood/gallery/`,
          originalBaseUrl: `${BASE_URL}/Edgewood/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Elk Haven",
    planSize: "2810 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Elk_Haven/banner/Elk_Haven.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Elk_Haven/floorplans/Elk_Haven_f1.gif`,
      imagePlanF2: `${BASE_URL}/Elk_Haven/floorplans/Elk_Haven_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Elk_Haven/banner/Elk_Haven.jpg`,
          original: `${BASE_URL}/Elk_Haven/banner/Elk_Haven.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Elk_Haven/gallery/`,
          originalBaseUrl: `${BASE_URL}/Elk_Haven/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Englewood",
    planSize: "2920 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Englewood/banner/Englewood.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Englewood/floorplans/Englewood_f1.gif`,
      imagePlanF2: `${BASE_URL}/Englewood/floorplans/Englewood_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Englewood/banner/Englewood.jpg`,
          original: `${BASE_URL}/Englewood/banner/Englewood.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Englewood/gallery/`,
          originalBaseUrl: `${BASE_URL}/Englewood/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Fairmont",
    planSize: "1534 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Fairmont/banner/Fairmont.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Fairmont/floorplans/Fairmont_f1.gif`,
      imagePlanF2: `${BASE_URL}/Fairmont/floorplans/Fairmont_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Fairmont/banner/Fairmont.jpg`,
          original: `${BASE_URL}/Fairmont/banner/Fairmont.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Fairmont/gallery/`,
          originalBaseUrl: `${BASE_URL}/Fairmont/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Fox Valley",
    planSize: "5300 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Fox_Valley/banner/Fox_Valley.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Fox_Valley/floorplans/Fox_Valley_f1.gif`,
      imagePlanF2: `${BASE_URL}/Fox_Valley/floorplans/Fox_Valley_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Fox_Valley/banner/Fox_Valley.jpg`,
          original: `${BASE_URL}/Fox_Valley/banner/Fox_Valley.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Fox_Valley/gallery/`,
          originalBaseUrl: `${BASE_URL}/Fox_Valley/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Grandview",
    planSize: "5022 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Grandview/banner/Grandview.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Grandview/floorplans/Grandview_f0.gif`,
      imagePlanF1: `${BASE_URL}/Grandview/floorplans/Grandview_f1.gif`,
      imagePlanF2: `${BASE_URL}/Grandview/floorplans/Grandview_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Grandview/banner/Grandview.jpg`,
          original: `${BASE_URL}/Grandview/banner/Grandview.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Grandview/gallery/`,
          originalBaseUrl: `${BASE_URL}/Grandview/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Greystone",
    planSize: "3371 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Greystone/banner/Greystone.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Greystone/floorplans/Greystone_f1.gif`,
      imagePlanF2: `${BASE_URL}/Greystone/floorplans/Greystone_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Greystone/banner/Greystone.jpg`,
          original: `${BASE_URL}/Greystone/banner/Greystone.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Greystone/gallery/`,
          originalBaseUrl: `${BASE_URL}/Greystone/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Grizzly Den",
    planSize: "4372 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Grizzly_Den/banner/Grizzly_Den.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Grizzly_Den/floorplans/Grizzly_Den_f0.gif`,
      imagePlanF1: `${BASE_URL}/Grizzly_Den/floorplans/Grizzly_Den_f1.gif`,
      imagePlanF2: `${BASE_URL}/Grizzly_Den/floorplans/Grizzly_Den_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Grizzly_Den/banner/Grizzly_Den.jpg`,
          original: `${BASE_URL}/Grizzly_Den/banner/Grizzly_Den.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Grizzly_Den/gallery/`,
          originalBaseUrl: `${BASE_URL}/Grizzly_Den/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Guesthouse",
    planSize: "1670 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Guesthouse/banner/Guesthouse.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Guesthouse/floorplans/Guesthouse_f1.gif`,
      imagePlanF2: `${BASE_URL}/Guesthouse/floorplans/Guesthouse_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Guesthouse/banner/Guesthouse.jpg`,
          original: `${BASE_URL}/Guesthouse/banner/Guesthouse.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Guesthouse/gallery/`,
          originalBaseUrl: `${BASE_URL}/Guesthouse/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Holloway",
    planSize: "1730 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Holloway/banner/Holloway.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Holloway/floorplans/Holloway_f1.gif`,
      imagePlanF2: `${BASE_URL}/Holloway/floorplans/Holloway_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Holloway/banner/Holloway.jpg`,
          original: `${BASE_URL}/Holloway/banner/Holloway.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Holloway/gallery/`,
          originalBaseUrl: `${BASE_URL}/Holloway/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Huron Lake",
    planSize: "1953 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Huron_Lake/banner/Huron_Lake.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Huron_Lake/floorplans/Huron_Lake_f1.gif`,
      imagePlanF2: `${BASE_URL}/Huron_Lake/floorplans/Huron_Lake_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Huron_Lake/banner/Huron_Lake.jpg`,
          original: `${BASE_URL}/Huron_Lake/banner/Huron_Lake.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Huron_Lake/gallery/`,
          originalBaseUrl: `${BASE_URL}/Huron_Lake/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Johnson Creek",
    planSize: "2306 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Johnson_Creek/banner/Johnson_Creek.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Johnson_Creek/floorplans/Johnson_Creek_f1.gif`,
      imagePlanF2: `${BASE_URL}/Johnson_Creek/floorplans/Johnson_Creek_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Johnson_Creek/banner/Johnson_Creek.jpg`,
          original: `${BASE_URL}/Johnson_Creek/banner/Johnson_Creek.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Johnson_Creek/gallery/`,
          originalBaseUrl: `${BASE_URL}/Johnson_Creek/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Juniper",
    planSize: "2135 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Juniper/banner/Juniper.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Juniper/floorplans/Juniper_f1.gif`,
      imagePlanF2: `${BASE_URL}/Juniper/floorplans/Juniper_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Juniper/banner/Juniper.jpg`,
          original: `${BASE_URL}/Juniper/banner/Juniper.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Juniper/gallery/`,
          originalBaseUrl: `${BASE_URL}/Juniper/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Kinderhook",
    planSize: "1628 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Kinderhook/banner/Kinderhook.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Kinderhook/floorplans/Kinderhook_f1.gif`,
      imagePlanF2: `${BASE_URL}/Kinderhook/floorplans/Kinderhook_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Kinderhook/banner/Kinderhook.jpg`,
          original: `${BASE_URL}/Kinderhook/banner/Kinderhook.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Kinderhook/gallery/`,
          originalBaseUrl: `${BASE_URL}/Kinderhook/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Langdon",
    planSize: "2654 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Langdon/banner/Langdon.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Langdon/floorplans/Langdon_f1.gif`,
      imagePlanF2: `${BASE_URL}/Langdon/floorplans/Langdon_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Langdon/banner/Langdon.jpg`,
          original: `${BASE_URL}/Langdon/banner/Langdon.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Langdon/gallery/`,
          originalBaseUrl: `${BASE_URL}/Langdon/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Linden",
    planSize: "1902 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Linden/banner/Linden.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Linden/floorplans/Linden_f1.gif`,
      imagePlanF2: `${BASE_URL}/Linden/floorplans/Linden_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Linden/banner/Linden.jpg`,
          original: `${BASE_URL}/Linden/banner/Linden.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Linden/gallery/`,
          originalBaseUrl: `${BASE_URL}/Linden/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Mackinaw",
    planSize: "1364 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Mackinaw/banner/Mackinaw.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Mackinaw/floorplans/Mackinaw_f1.gif`,
      imagePlanF2: `${BASE_URL}/Mackinaw/floorplans/Mackinaw_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Mackinaw/banner/Mackinaw.jpg`,
          original: `${BASE_URL}/Mackinaw/banner/Mackinaw.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Mackinaw/gallery/`,
          originalBaseUrl: `${BASE_URL}/Mackinaw/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Madison",
    planSize: "5376 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Madison/banner/Madison.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Madison/floorplans/Madison_f1.gif`,
      imagePlanF2: `${BASE_URL}/Madison/floorplans/Madison_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Madison/banner/Madison.jpg`,
          original: `${BASE_URL}/Madison/banner/Madison.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Madison/gallery/`,
          originalBaseUrl: `${BASE_URL}/Madison/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Majestic",
    planSize: "3356 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Majestic/banner/Majestic.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Majestic/floorplans/Majestic_f1.gif`,
      imagePlanF2: `${BASE_URL}/Majestic/floorplans/Majestic_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Majestic/banner/Majestic.jpg`,
          original: `${BASE_URL}/Majestic/banner/Majestic.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Majestic/gallery/`,
          originalBaseUrl: `${BASE_URL}/Majestic/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Manitoulin",
    planSize: "2366 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Manitoulin/banner/Manitoulin.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Manitoulin/floorplans/Manitoulin_f1.gif`,
      imagePlanF2: `${BASE_URL}/Manitoulin/floorplans/Manitoulin_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Manitoulin/banner/Manitoulin.jpg`,
          original: `${BASE_URL}/Manitoulin/banner/Manitoulin.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Manitoulin/gallery/`,
          originalBaseUrl: `${BASE_URL}/Manitoulin/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Maple Creek",
    planSize: "2470 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Maple_Creek/banner/Maple_Creek.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Maple_Creek/floorplans/Maple_Creek_f1.gif`,
      imagePlanF2: `${BASE_URL}/Maple_Creek/floorplans/Maple_Creek_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Maple_Creek/banner/Maple_Creek.jpg`,
          original: `${BASE_URL}/Maple_Creek/banner/Maple_Creek.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Maple_Creek/gallery/`,
          originalBaseUrl: `${BASE_URL}/Maple_Creek/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Minocqua",
    planSize: "1292 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Minocqua/banner/Minocqua.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Minocqua/floorplans/Minocqua_f1.gif`,
      imagePlanF2: `${BASE_URL}/Minocqua/floorplans/Minocqua_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Minocqua/banner/Minocqua.jpg`,
          original: `${BASE_URL}/Minocqua/banner/Minocqua.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Minocqua/gallery/`,
          originalBaseUrl: `${BASE_URL}/Minocqua/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Modesto",
    planSize: "4320 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Modesto/banner/Modesto.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Modesto/floorplans/Modesto_f0.gif`,
      imagePlanF1: `${BASE_URL}/Modesto/floorplans/Modesto_f1.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Modesto/banner/Modesto.jpg`,
          original: `${BASE_URL}/Modesto/banner/Modesto.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Modesto/gallery/`,
          originalBaseUrl: `${BASE_URL}/Modesto/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Monashee",
    planSize: "3040 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Monashee/banner/Monashee.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Monashee/floorplans/Monashee_f1.gif`,
      imagePlanF2: `${BASE_URL}/Monashee/floorplans/Monashee_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Monashee/banner/Monashee.jpg`,
          original: `${BASE_URL}/Monashee/banner/Monashee.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Monashee/gallery/`,
          originalBaseUrl: `${BASE_URL}/Monashee/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Montague",
    planSize: "3143 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Montague/banner/Montague.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Montague/floorplans/Montague_f1.gif`,
      imagePlanF2: `${BASE_URL}/Montague/floorplans/Montague_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Montague/banner/Montague.jpg`,
          original: `${BASE_URL}/Montague/banner/Montague.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Montague/gallery/`,
          originalBaseUrl: `${BASE_URL}/Montague/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Montara",
    planSize: "1670 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Montara/banner/Montara.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Montara/floorplans/Montara_f1.gif`,
      imagePlanF2: `${BASE_URL}/Montara/floorplans/Montara_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Montara/banner/Montara.jpg`,
          original: `${BASE_URL}/Montara/banner/Montara.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Montara/gallery/`,
          originalBaseUrl: `${BASE_URL}/Montara/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Nahanni",
    planSize: "4990 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Nahanni/banner/Nahanni.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Nahanni/floorplans/Nahanni_f1.gif`,
      imagePlanF2: `${BASE_URL}/Nahanni/floorplans/Nahanni_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Nahanni/banner/Nahanni.jpg`,
          original: `${BASE_URL}/Nahanni/banner/Nahanni.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Nahanni/gallery/`,
          originalBaseUrl: `${BASE_URL}/Nahanni/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Naramata",
    planSize: "3032 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Naramata/banner/Naramata.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Naramata/floorplans/Naramata_f1.gif`,
      imagePlanF2: `${BASE_URL}/Naramata/floorplans/Naramata_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Naramata/banner/Naramata.jpg`,
          original: `${BASE_URL}/Naramata/banner/Naramata.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Naramata/gallery/`,
          originalBaseUrl: `${BASE_URL}/Naramata/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Newport",
    planSize: "1269 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Newport/banner/Newport.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Newport/floorplans/Newport_f1.gif`,
      imagePlanF2: `${BASE_URL}/Newport/floorplans/Newport_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Newport/banner/Newport.jpg`,
          original: `${BASE_URL}/Newport/banner/Newport.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Newport/gallery/`,
          originalBaseUrl: `${BASE_URL}/Newport/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Northland",
    planSize: "2482 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Northland/banner/Northland.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Northland/floorplans/Northland_f1.gif`,
      imagePlanF2: `${BASE_URL}/Northland/floorplans/Northland_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Northland/banner/Northland.jpg`,
          original: `${BASE_URL}/Northland/banner/Northland.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Northland/gallery/`,
          originalBaseUrl: `${BASE_URL}/Northland/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Outreach",
    planSize: "1717 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Outreach/banner/Outreach.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Outreach/floorplans/Outreach_f1.gif`,
      imagePlanF2: `${BASE_URL}/Outreach/floorplans/Outreach_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Outreach/banner/Outreach.jpg`,
          original: `${BASE_URL}/Outreach/banner/Outreach.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Outreach/gallery/`,
          originalBaseUrl: `${BASE_URL}/Outreach/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Oyama",
    planSize: "1945 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Oyama/banner/Oyama.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Oyama/floorplans/Oyama_f1.gif`,
      imagePlanF2: `${BASE_URL}/Oyama/floorplans/Oyama_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Oyama/banner/Oyama.jpg`,
          original: `${BASE_URL}/Oyama/banner/Oyama.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Oyama/gallery/`,
          originalBaseUrl: `${BASE_URL}/Oyama/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Pinecrest",
    planSize: "3424 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Pinecrest/banner/Pinecrest.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Pinecrest/floorplans/Pinecrest_f0.gif`,
      imagePlanF1: `${BASE_URL}/Pinecrest/floorplans/Pinecrest_f1.gif`,
      imagePlanF2: `${BASE_URL}/Pinecrest/floorplans/Pinecrest_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Pinecrest/banner/Pinecrest.jpg`,
          original: `${BASE_URL}/Pinecrest/banner/Pinecrest.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Pinecrest/gallery/`,
          originalBaseUrl: `${BASE_URL}/Pinecrest/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Pinetop",
    planSize: "1764 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Pinetop/banner/Pinetop.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Pinetop/floorplans/Pinetop_f1.gif`,
      imagePlanF2: `${BASE_URL}/Pinetop/floorplans/Pinetop_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Pinetop/banner/Pinetop.jpg`,
          original: `${BASE_URL}/Pinetop/banner/Pinetop.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Pinetop/gallery/`,
          originalBaseUrl: `${BASE_URL}/Pinetop/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Powderhorn",
    planSize: "916 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Powderhorn/banner/Powderhorn.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Powderhorn/floorplans/Powderhorn_f1.gif`,
      imagePlanF2: `${BASE_URL}/Powderhorn/floorplans/Powderhorn_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Powderhorn/banner/Powderhorn.jpg`,
          original: `${BASE_URL}/Powderhorn/banner/Powderhorn.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Powderhorn/gallery/`,
          originalBaseUrl: `${BASE_URL}/Powderhorn/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Revelstoke",
    planSize: "2193 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Revelstoke/banner/Revelstoke.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Revelstoke/floorplans/Revelstoke_f1.gif`,
      imagePlanF2: `${BASE_URL}/Revelstoke/floorplans/Revelstoke_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Revelstoke/banner/Revelstoke.jpg`,
          original: `${BASE_URL}/Revelstoke/banner/Revelstoke.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Revelstoke/gallery/`,
          originalBaseUrl: `${BASE_URL}/Revelstoke/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Rochester",
    planSize: "2088 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Rochester/banner/Rochester.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Rochester/floorplans/Rochester_f1.gif`,
      imagePlanF2: `${BASE_URL}/Rochester/floorplans/Rochester_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Rochester/banner/Rochester.jpg`,
          original: `${BASE_URL}/Rochester/banner/Rochester.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Rochester/gallery/`,
          originalBaseUrl: `${BASE_URL}/Rochester/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Rockwood",
    planSize: "2088 SQ. FT.", //Missing in original site
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Rockwood/banner/Rockwood.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Rockwood/floorplans/Rockwood_f1.gif`,
      imagePlanF2: `${BASE_URL}/Rockwood/floorplans/Rockwood_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Rockwood/banner/Rockwood.jpg`,
          original: `${BASE_URL}/Rockwood/banner/Rockwood.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Rockwood/gallery/`,
          originalBaseUrl: `${BASE_URL}/Rockwood/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Rosedale",
    planSize: "3084 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Rosedale/banner/Rosedale.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Rosedale/floorplans/Rosedale_f1.gif`,
      imagePlanF2: `${BASE_URL}/Rosedale/floorplans/Rosedale_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Rosedale/banner/Rosedale.jpg`,
          original: `${BASE_URL}/Rosedale/banner/Rosedale.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Rosedale/gallery/`,
          originalBaseUrl: `${BASE_URL}/Rosedale/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Saginaw",
    planSize: "2305 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Saginaw/banner/Saginaw.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Saginaw/floorplans/Saginaw_f1.gif`,
      imagePlanF2: `${BASE_URL}/Saginaw/floorplans/Saginaw_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Saginaw/banner/Saginaw.jpg`,
          original: `${BASE_URL}/Saginaw/banner/Saginaw.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Saginaw/gallery/`,
          originalBaseUrl: `${BASE_URL}/Saginaw/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Saratoga",
    planSize: "2210 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Saratoga/banner/Saratoga.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Saratoga/floorplans/Saratoga_f1.gif`,
      imagePlanF2: `${BASE_URL}/Saratoga/floorplans/Saratoga_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Saratoga/banner/Saratoga.jpg`,
          original: `${BASE_URL}/Saratoga/banner/Saratoga.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Saratoga/gallery/`,
          originalBaseUrl: `${BASE_URL}/Saratoga/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Seaside",
    planSize: "1560 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Seaside/banner/Seaside.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Seaside/floorplans/Seaside_f1.gif`,
      imagePlanF2: `${BASE_URL}/Seaside/floorplans/Seaside_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Seaside/banner/Seaside.jpg`,
          original: `${BASE_URL}/Seaside/banner/Seaside.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Seaside/gallery/`,
          originalBaseUrl: `${BASE_URL}/Seaside/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Sherman Oaks",
    planSize: "3059 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Sherman_Oaks/banner/Sherman_Oaks.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Sherman_Oaks/floorplans/Sherman_Oaks_f1.gif`,
      imagePlanF2: `${BASE_URL}/Sherman_Oaks/floorplans/Sherman_Oaks_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Sherman_Oaks/banner/Sherman_Oaks.jpg`,
          original: `${BASE_URL}/Sherman_Oaks/banner/Sherman_Oaks.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Sherman_Oaks/gallery/`,
          originalBaseUrl: `${BASE_URL}/Sherman_Oaks/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Silver Star",
    planSize: "2137 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Silver_Star/banner/Silver_Star.jpg`,
    floorPlan: {
      imagePlanF0: `${BASE_URL}/Silver_Star/floorplans/Silver_Star_f0.gif`,
      imagePlanF1: `${BASE_URL}/Silver_Star/floorplans/Silver_Star_f1.gif`,
      imagePlanF2: `${BASE_URL}/Silver_Star/floorplans/Silver_Star_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Silver_Star/banner/Silver_Star.jpg`,
          original: `${BASE_URL}/Silver_Star/banner/Silver_Star.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Silver_Star/gallery/`,
          originalBaseUrl: `${BASE_URL}/Silver_Star/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Skeena",
    planSize: "2799 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Skeena/banner/Skeena.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Skeena/floorplans/Skeena_f1.gif`,
      imagePlanF2: `${BASE_URL}/Skeena/floorplans/Skeena_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Skeena/banner/Skeena.jpg`,
          original: `${BASE_URL}/Skeena/banner/Skeena.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Skeena/gallery/`,
          originalBaseUrl: `${BASE_URL}/Skeena/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Stanwick",
    planSize: "2385 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Stanwick/banner/Stanwick.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Stanwick/floorplans/Stanwick_f1.gif`,
      imagePlanF2: `${BASE_URL}/Stanwick/floorplans/Stanwick_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Stanwick/banner/Stanwick.jpg`,
          original: `${BASE_URL}/Stanwick/banner/Stanwick.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Stanwick/gallery/`,
          originalBaseUrl: `${BASE_URL}/Stanwick/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Sunningdale",
    planSize: "2078 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Sunningdale/banner/Sunningdale.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Sunningdale/floorplans/Sunningdale_f1.gif`,
      imagePlanF2: `${BASE_URL}/Sunningdale/floorplans/Sunningdale_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Sunningdale/banner/Sunningdale.jpg`,
          original: `${BASE_URL}/Sunningdale/banner/Sunningdale.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Sunningdale/gallery/`,
          originalBaseUrl: `${BASE_URL}/Sunningdale/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Tamarack",
    planSize: "1608 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Tamarack/banner/Tamarack.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Tamarack/floorplans/Tamarack_f1.gif`,
      imagePlanF2: `${BASE_URL}/Tamarack/floorplans/Tamarack_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Tamarack/banner/Tamarack.jpg`,
          original: `${BASE_URL}/Tamarack/banner/Tamarack.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Tamarack/gallery/`,
          originalBaseUrl: `${BASE_URL}/Tamarack/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Texas Ranch",
    planSize: "3630 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Texas_Ranch/banner/Texas_Ranch.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Texas_Ranch/floorplans/Texas_Ranch_f1.gif`,
      imagePlanF2: `${BASE_URL}/Texas_Ranch/floorplans/Texas_Ranch_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Texas_Ranch/banner/Texas_Ranch.jpg`,
          original: `${BASE_URL}/Texas_Ranch/banner/Texas_Ranch.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Texas_Ranch/gallery/`,
          originalBaseUrl: `${BASE_URL}/Texas_Ranch/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Thurston",
    planSize: "2329 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Thurston/banner/Thurston.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Thurston/floorplans/Thurston_f1.gif`,
      imagePlanF2: `${BASE_URL}/Thurston/floorplans/Thurston_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Thurston/banner/Thurston.jpg`,
          original: `${BASE_URL}/Thurston/banner/Thurston.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Thurston/gallery/`,
          originalBaseUrl: `${BASE_URL}/Thurston/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Treen Hill",
    planSize: "1809 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Treen_Hill/banner/Treen_Hill.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Treen_Hill/floorplans/Treen_Hill_f1.gif`,
      imagePlanF2: `${BASE_URL}/Treen_Hill/floorplans/Treen_Hill_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Treen_Hill/banner/Treen_Hill.jpg`,
          original: `${BASE_URL}/Treen_Hill/banner/Treen_Hill.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Treen_Hill/gallery/`,
          originalBaseUrl: `${BASE_URL}/Treen_Hill/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Valhalla",
    planSize: "2026 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Valhalla/banner/Valhalla.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Valhalla/floorplans/Valhalla_f1.gif`,
      imagePlanF2: `${BASE_URL}/Valhalla/floorplans/Valhalla_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Valhalla/banner/Valhalla.jpg`,
          original: `${BASE_URL}/Valhalla/banner/Valhalla.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Valhalla/gallery/`,
          originalBaseUrl: `${BASE_URL}/Valhalla/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Victoria",
    planSize: "1269 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Victoria/banner/Victoria.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Victoria/floorplans/Victoria_f1.gif`,
      imagePlanF2: `${BASE_URL}/Victoria/floorplans/Victoria_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Victoria/banner/Victoria.jpg`,
          original: `${BASE_URL}/Victoria/banner/Victoria.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Victoria/gallery/`,
          originalBaseUrl: `${BASE_URL}/Victoria/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Waterford",
    planSize: "1635 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Waterford/banner/Waterford.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Waterford/floorplans/Waterford_f1.gif`,
      imagePlanF2: `${BASE_URL}/Waterford/floorplans/Waterford_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Waterford/banner/Waterford.jpg`,
          original: `${BASE_URL}/Waterford/banner/Waterford.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Waterford/gallery/`,
          originalBaseUrl: `${BASE_URL}/Waterford/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Wenatchee",
    planSize: "1866 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Wenatchee/banner/Wenatchee.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Wenatchee/floorplans/Wenatchee_f1.gif`,
      imagePlanF2: `${BASE_URL}/Wenatchee/floorplans/Wenatchee_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Wenatchee/banner/Wenatchee.jpg`,
          original: `${BASE_URL}/Wenatchee/banner/Wenatchee.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Wenatchee/gallery/`,
          originalBaseUrl: `${BASE_URL}/Wenatchee/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Westbury",
    planSize: "2465 SQ. FT.",
    categoryCd: 'PostAndBeam',
    image: `${BASE_URL}/Westbury/banner/Westbury.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Westbury/floorplans/Westbury_f1.gif`,
      imagePlanF2: `${BASE_URL}/Westbury/floorplans/Westbury_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Westbury/banner/Westbury.jpg`,
          original: `${BASE_URL}/Westbury/banner/Westbury.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Westbury/gallery/`,
          originalBaseUrl: `${BASE_URL}/Westbury/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Westchester",
    planSize: "3362 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Westchester/banner/Westchester.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Westchester/floorplans/Westchester_f1.gif`,
      imagePlanF2: `${BASE_URL}/Westchester/floorplans/Westchester_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Westchester/banner/Westchester.jpg`,
          original: `${BASE_URL}/Westchester/banner/Westchester.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Westchester/gallery/`,
          originalBaseUrl: `${BASE_URL}/Westchester/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Whistler",
    planSize: "2825 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Whistler/banner/Whistler.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Whistler/floorplans/Whistler_f1.gif`,
      imagePlanF2: `${BASE_URL}/Whistler/floorplans/Whistler_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Whistler/banner/Whistler.jpg`,
          original: `${BASE_URL}/Whistler/banner/Whistler.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Whistler/gallery/`,
          originalBaseUrl: `${BASE_URL}/Whistler/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Wildwood",
    planSize: "1953 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Wildwood/banner/Wildwood.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Wildwood/floorplans/Wildwood_f1.gif`,
      imagePlanF2: `${BASE_URL}/Wildwood/floorplans/Wildwood_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Wildwood/banner/Wildwood.jpg`,
          original: `${BASE_URL}/Wildwood/banner/Wildwood.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Wildwood/gallery/`,
          originalBaseUrl: `${BASE_URL}/Wildwood/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Winston",
    planSize: "4506 SQ. FT.",
    categoryCd: 'TimberFrame',
    image: `${BASE_URL}/Winston/banner/Winston.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Winston/floorplans/Winston_f1.gif`,
      imagePlanF2: `${BASE_URL}/Winston/floorplans/Winston_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Winston/banner/Winston.jpg`,
          original: `${BASE_URL}/Winston/banner/Winston.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Winston/gallery/`,
          originalBaseUrl: `${BASE_URL}/Winston/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Winterton",
    planSize: "2860 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Winterton/banner/Winterton.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Winterton/floorplans/Winterton_f1.gif`,
      imagePlanF2: `${BASE_URL}/Winterton/floorplans/Winterton_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Winterton/banner/Winterton.jpg`,
          original: `${BASE_URL}/Winterton/banner/Winterton.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Winterton/gallery/`,
          originalBaseUrl: `${BASE_URL}/Winterton/gallery/`,
          count: 15
        }
    }
  },
  {
    planName: "Woodridge",
    planSize: "868 SQ. FT.",
    categoryCd: 'StackedLogHomes',
    image: `${BASE_URL}/Woodridge/banner/Woodridge.jpg`,
    floorPlan: {
      imagePlanF1: `${BASE_URL}/Woodridge/floorplans/Woodridge_f1.gif`,
      imagePlanF2: `${BASE_URL}/Woodridge/floorplans/Woodridge_f2.gif`,
    },
    gallery: {
      videos: [
        {
          thumbnail: `${BASE_URL}/Woodridge/banner/Woodridge.jpg`,
          original: `${BASE_URL}/Woodridge/banner/Woodridge.jpg`,
          embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
          description: 'test'
        }],
      images: 
        {
          thumbnailBaseUrl: `${BASE_URL}/Woodridge/gallery/`,
          originalBaseUrl: `${BASE_URL}/Woodridge/gallery/`,
          count: 15
        }
    }
  }
];
